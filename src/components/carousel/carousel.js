import React from 'react';
import { Link } from "gatsby"
import Carousel from 'react-elastic-carousel'
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
        console.log(this.state)
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
                        <div key={item.id} className="carousel-section">
                            <Link to={item.slug}><h2>{item.title}</h2></Link>
                            <h3>{item.subtitle}</h3>
                        </div>
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
        { width: 927, itemsToShow: 3 }
    ],
    items: [],
    selectedIndex: 0,
    carousel: undefined,
    renderNavBar: true,
    title: null
};

export default CustomCarousel;