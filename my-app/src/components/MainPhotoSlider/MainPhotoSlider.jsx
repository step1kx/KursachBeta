import React, { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import seasonMenuPhoto1 from '../../assets/cupsiFinal.png';
import seasonMenuPhoto2 from '../../assets/cupsiOtvari.png';
import seasonMenuPhoto3 from '../../assets/cupsiKakao.png';
import './MainPhotoSlider.css';

function MainPhotoSlider() {
    const slides = [seasonMenuPhoto1, seasonMenuPhoto2, seasonMenuPhoto3];
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider-container">
            <div 
                className="slider-wrapper"
                style={{ transform: `translateX(-${currentSlide * (100/3)}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="slide"
                    >
                        <img 
                            src={slide} 
                            alt={`Slide ${index + 1}`}
                            loading="lazy" 
                        />
                    </div>
                ))}
            </div>
            
            <button className="slider-arrow prev" onClick={prevSlide}>
                <img className="slider-arrow-img prev" src={leftArrow} alt="Сезонное меню"></img>
            </button>
            <button className="slider-arrow next" onClick={nextSlide}>
                <img className="slider-arrow-img next" src={rightArrow} alt="Сезонное меню"></img>
            </button>
        </div>
    );
}

export default MainPhotoSlider;