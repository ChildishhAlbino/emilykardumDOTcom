import React from 'react';

const carouselCard = ({ item, render }) => {
    if (render == null) {
        return null
    } else {
        return (
            render(item)
        )
    }

}



export default carouselCard