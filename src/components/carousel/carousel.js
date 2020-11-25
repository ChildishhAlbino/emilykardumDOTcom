import React from 'react';
import { Link, graphql } from "gatsby"
import CarouselCard from "./CarouselCard";
import Carousel from "react-elastic-carousel"
import './carousel.scss'
class CustomCarousel extends React.Component {
    state = { articles: [], ordered: [] };

    componentDidMount() {
        let articles = this.props.articles
        let selectedIndex = this.props.startingIndex ? this.props.startingIndex : 0
        let itemsToShow = this.props.itemsToShow ? this.props.itemsToShow : 3

        const reel = new Proxy(articles, {
            get(target, prop) {
                if (!isNaN(prop)) {
                    prop = parseInt(prop, 10);
                    if (prop < 0) {
                        prop += target.length;
                    }

                    while (prop >= target.length) {
                        console.log("target length", target.length);
                        console.log("prop", prop);
                        prop = prop % target.length;
                        console.log(prop);
                    }
                }
                return target[prop];
            }
        });
        let ordered = this.getOrdered(articles, selectedIndex, itemsToShow, reel)
        this.setState({ articles, reel, selectedIndex, itemsToShow, ordered });

    }

    getOrdered(items, selectedIndex, itemsToShow, reel) {
        let ordered = []
        let maxItems = Math.min(itemsToShow, items.length)
        for (let i = 0; i < itemsToShow; i++) {
            let index = i + selectedIndex
            let item = null
            if (i > maxItems - 1) {
                item = null
            } else {
                item = reel[index]
            }
            ordered[i] = item
        }
        return ordered
    }

    next() {
        let { articles, selectedIndex, reel, itemsToShow } = this.state
        if (selectedIndex == itemsToShow) {
            selectedIndex = 0
        } else {
            selectedIndex += 1
        }
        let ordered = this.getOrdered(articles, selectedIndex, itemsToShow, reel)
        this.setState({ selectedIndex, ordered })
    }

    prev() {
        console.log('Previous')
        let { articles, selectedIndex, reel, itemsToShow } = this.state
        if (selectedIndex <= 0) {
            selectedIndex = itemsToShow
        } else {
            selectedIndex -= 1
        }
        let ordered = this.getOrdered(articles, selectedIndex, itemsToShow, reel)
        this.setState({ selectedIndex, ordered })
    }

    render() {
        let { ordered } = this.state
        console.log(this.state)
        let elements = (ordered) => {
            return ordered.map(item => {
                if (item != null) {
                    return (
                        <div key={item.id} className="carousel-section">
                            <Link to={item.slug}><h2>{item.title}</h2></Link>
                            <h3>{item.subtitle}</h3>
                        </div>
                    )
                } else {
                    return null
                }
            })
        }
        return (
            <div className="carousel-container">
                <div onClick={() => { this.prev() }}>
                    <p>BACK</p>
                </div>
                <div onClick={() => { this.next() }}>
                    <p>FORWARD</p>
                </div>
                <div className="slider">
                    {
                        elements(ordered)
                    }
                </div>
            </div >
        )
    }
}

export default CustomCarousel;