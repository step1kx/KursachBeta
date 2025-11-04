import React, { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import thematic1 from '../../assets/cupsTematic1.jpg';
import thematic2 from '../../assets/cupsTematic2.jpg';
import thematic3 from '../../assets/cupsTematic3.jpg';
import thematic4 from '../../assets/cupsTematic4.jpg';
import thematic5 from '../../assets/cupsTematic5.jpg';
import regular1 from '../../assets/cupsDesert1.jpg';
import regular2 from '../../assets/cupsDesert2.jpg';
import regular3 from '../../assets/cupsDesert3.jpg';
import regular4 from '../../assets/cupsDesert4.jpg';
import './DessertBlock.css';

function DessertBlock () {
    // Массивы с фотографиями для разных типов десертов
    const thematicDesserts = [thematic1, thematic2, thematic3, thematic4, thematic5];
    const regularDesserts = [regular1, regular2, regular3, regular4];
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dessertType, setDessertType] = useState('thematic'); // 'thematic' или 'regular'
    
    // Выбираем массив слайдов в зависимости от типа десерта
    const slides = dessertType === 'thematic' ? thematicDesserts : regularDesserts;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // При смене типа десерта сбрасываем на первый слайд
    const handleDessertTypeChange = (type) => {
        setDessertType(type);
        setCurrentSlide(0);
    };

    return (
        <div className="aside-container">
            <h2 className="dessert-block-aside__header">Наши десерты</h2>
            <div className="dessert-type-buttons">
                <button 
                    className={`type-button ${dessertType === 'thematic' ? 'active' : ''}`}
                    onClick={() => handleDessertTypeChange('thematic')}
                >
                    Тематические десерты
                </button>
                <button 
                    className={`type-button ${dessertType === 'regular' ? 'active' : ''}`}
                    onClick={() => handleDessertTypeChange('regular')}
                >
                    Десерты
                </button>
            </div>

            {/* Слайдер */}
            <div className="desert-slider-container">
                <div 
                    className="desert-slider-wrapper"
                    style={{ transform: `translateX(-${currentSlide * (100/3)}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="desert-slide"
                        >
                            <img 
                                src={slide} 
                                alt={`${dessertType === 'thematic' ? 'Тематический' : 'Обычный'} десерт ${index + 1}`}
                                loading="lazy" 
                            />
                        </div>
                    ))}
                </div>
                
                <button className="desert-slider-arrow prev" onClick={prevSlide}>
                    <img className="desert-slider-arrow-img prev" src={leftArrow} alt="Предыдущий"></img>
                </button>
                <button className="desert-slider-arrow next" onClick={nextSlide}>
                    <img className="desert-slider-arrow-img next" src={rightArrow} alt="Следующий"></img>
                </button>
            </div>
            <p className="desert-block-aside__description">Наши поставщики десертов</p>
            <div className="desert-block-aside__members">
                <a href="https://www.instagram.com/verrine.minsk/" className="members-link">Verrine</a>  
                <a href="https://www.instagram.com/drazhynbakery/" className="members-link">Пекарня Дражина</a> 
                <a href="https://www.instagram.com/bakezavod/" className="members-link">Bake Zavod</a> 
            </div>
        </div>
    );
}

export default DessertBlock;