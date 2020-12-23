import React from 'react';
import Carousel from 'react-elastic-carousel'
import ArticleCard from '../article-card/article-card';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './carousel.scss'
class CustomCarousel extends React.Component {
    state = { ...this.props };


    componentDidMount() {
        this.setState({ ...this.props });
    }

    renderNavBar = () => {
        let { carousel, title } = this.state
        return (
            <div className="carousel-nav-bar-wrapper">
                { title && <h1>{title}</h1>}
                { carousel !== undefined && (
                    <div className="carousel-nav-bar">
                        <div onClick={() => { carousel.slidePrev() }}>
                            <FaArrowLeft />
                        </div>
                        <div onClick={() => { carousel.slideNext() }}>
                            <FaArrowRight />
                        </div>
                    </div>
                )}
            </div>
        )
    }

    render() {
        let { items, breakPoints, renderNavBar } = this.state
        // console.log(this.state)
        return (
            <div className="carousel-container">
                {renderNavBar && this.renderNavBar()}
                <Carousel
                    breakPoints={breakPoints}
                    showArrows={false}
                    enableSwipe={false}
                    enableMouseSwipe={false}
                    preventDefaultTouchmoveEvent={false}
                    ref={ref => {
                        if (this.state.carousel === undefined) {
                            this.setState({ carousel: ref })
                        }
                    }}
                >
                    {items.map(item => (
                        <ArticleCard key={item.id} article={item}></ArticleCard>
                    ))}
                </Carousel>
            </div >
        )
    }
}
// there is a 36px subtraction between page width and item width
CustomCarousel.defaultProps = {
    breakPoints: [
        { width: 1, itemsToShow: 1 },
        { width: 716, itemsToShow: 2 },
        { width: 972, itemsToShow: 3 }
    ],
    items: [],
    selectedIndex: 0,
    carousel: undefined,
    renderNavBar: true,
    title: null
};

export default CustomCarousel;