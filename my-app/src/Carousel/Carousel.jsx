/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import carouselImage1 from '../images/Carousel1.jpg';
import carouselImage2 from '../images/Carousel2.jpg';
import carouselImage3 from '../images/Carousel3.webp';
import carouselImage4 from '../images/Carousel4.png';
import { useRef } from 'react';


const images = [carouselImage1, carouselImage2, carouselImage3, carouselImage4];

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef(null);



    const pauseCarousel = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const startCarousel = () => {
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);
    };

    useEffect(() => {
        if (!isHovering) {
            startCarousel();
        }
        return () => pauseCarousel();
    }, [isHovering]);
    
    return (
        <>
            <div className="carousel-content" >
                <video src={require('../images/carouselBg.mp4')} autoPlay muted loop className="carousel__background-video" />
                <h1>Latest Additions: Unveiling the Newest Gems in Our Collection!</h1>
                <div className="carousel__images"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Carousel image ${index + 1}`}
                            className={`carousel__image ${index === currentImageIndex ? 'carousel__image--active' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousel;