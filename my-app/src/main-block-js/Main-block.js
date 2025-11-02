import React, { useState } from 'react';

import '../styles/fonts.css';
import '../styles/main-block.css'
import '../styles/aside-block.css'
import '../styles/dessert.css'
import '../styles/review.css'
import '../styles/slider.css';


import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';

import seasonMenuPhoto1 from '../assets/cupsiFinal.png'
import seasonMenuPhoto2 from '../assets/cupsiOtvari.png'
import seasonMenuPhoto3 from '../assets/cupsiKakao.png'

import cupsiVideo from '../assets/cupsiVideo.mp4'

import thematic1 from '../assets/cupsTematic1.jpg'
import thematic2 from '../assets/cupsTematic2.jpg'
import thematic3 from '../assets/cupsTematic3.jpg'
import thematic4 from '../assets/cupsTematic4.jpg'
import thematic5 from '../assets/cupsTematic5.jpg'

import regular1 from '../assets/cupsDesert1.jpg'
import regular2 from '../assets/cupsDesert2.jpg'
import regular3 from '../assets/cupsDesert3.jpg'
import regular4 from '../assets/cupsDesert4.jpg'


function MainMenu () {
    return (
        <>
            <section className="main-block-gallery shadow-box">
                <h2 className="main-block-gallery__header">Наше меню</h2>
                <div className="gallery-container">
<div className="container-mainMenu">
    {/* Заголовок */}
    <div className="menu-header">
        <h1 className="menu-main-title">CUP's</h1>
        <p className="menu-subtitle">coffee bar</p>
    </div>

    {/* ВЕРХНЯЯ ЧАСТЬ - НАПИТКИ */}
    <div className="menu-drinks-section">
        <div className="menu-columns">
            {/* Левая колонка - 2 блока */}
            <div className="menu-column">
                {/* Кофе */}
                <div className="menu-category">
                    <h2 className="category-title">Кофе</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <span className="item-name">Эспрессо</span>
                            <span className="item-volume">35</span>
                            <span className="item-dots"></span>
                            <span className="item-price">6 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Американо</span>
                            <span className="item-volume">180</span>
                            <span className="item-dots"></span>
                            <span className="item-price">6 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Флэт-уайт</span>
                            <span className="item-volume">250</span>
                            <span className="item-dots"></span>
                            <span className="item-price">7,5 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Капучино</span>
                            <span className="item-volume">250</span>
                            <span className="item-dots"></span>
                            <span className="item-price">7 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Двойной капучино</span>
                            <span className="item-volume">350</span>
                            <span className="item-dots"></span>
                            <span className="item-price">8 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Латте</span>
                            <span className="item-volume">350</span>
                            <span className="item-dots"></span>
                            <span className="item-price">9,5 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Раф</span>
                            <span className="item-volume">350</span>
                            <span className="item-dots"></span>
                            <span className="item-price">9 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Фильтр</span>
                            <span className="item-volume">200/300</span>
                            <span className="item-dots"></span>
                            <span className="item-price">6,5/8 р</span>
                        </div>
                    </div>
                </div>

                {/* Холодное кофе */}
                <div className="menu-category">
                    <h2 className="category-title">Холодное</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <span className="item-name">Айс-латте</span>
                            <span className="item-volume">375</span>
                            <span className="item-dots"></span>
                            <span className="item-price">9,5 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Айс-какао</span>
                            <span className="item-volume">375</span>
                            <span className="item-dots"></span>
                            <span className="item-price">9,5 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Айс-матчаа-латте</span>
                            <span className="item-volume">375</span>
                            <span className="item-dots"></span>
                            <span className="item-price">9,5 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Эспрессо-тоник</span>
                            <span className="item-volume">375</span>
                            <span className="item-dots"></span>
                            <span className="item-price">7,5 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Матча-тоник</span>
                            <span className="item-volume">375</span>
                            <span className="item-dots"></span>
                            <span className="item-price">7 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Бамбл</span>
                            <span className="item-volume">375</span>
                            <span className="item-dots"></span>
                            <span className="item-price">8 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Матча-бамбл</span>
                            <span className="item-volume">375</span>
                            <span className="item-dots"></span>
                            <span className="item-price">9,5 р</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Правая колонка - 3 блока */}
            <div className="menu-column">
                {/* Не кофе */}
                <div className="menu-category">
                    <h2 className="category-title">не кофе</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <span className="item-name">Чай</span>
                            <span className="item-volume">350/700</span>
                            <span className="item-dots"></span>
                            <span className="item-price">5,5/7 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Какао</span>
                            <span className="item-volume">250/350</span>
                            <span className="item-dots"></span>
                            <span className="item-price">7/8 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Горячий шоколад</span>
                            <span className="item-volume">160</span>
                            <span className="item-dots"></span>
                            <span className="item-price">7,5 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Матча латте</span>
                            <span className="item-volume">250/350</span>
                            <span className="item-dots"></span>
                            <span className="item-price">7/8 р</span>
                        </div>
                    </div>
                </div>

                {/* Отвары */}
                <div className="menu-category">
                    <h2 className="category-title">Отвары</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <span className="item-name">Облепиха-имбирь</span>
                            <span className="item-volume">350</span>
                            <span className="item-dots"></span>
                            <span className="item-price">9,5 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Вишня-можжевельник</span>
                            <span className="item-volume">350</span>
                            <span className="item-dots"></span>
                            <span className="item-price">9,5 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Лесные ягоды</span>
                            <span className="item-volume">350</span>
                            <span className="item-dots"></span>
                            <span className="item-price">9,5 р</span>
                        </div>
                    </div>
                </div>

                {/* Добавки */}
                <div className="menu-category">
                    <h2 className="category-title">Добавки</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <span className="item-name">Сироп</span>
                            <span className="item-volume">15/20</span>
                            <span className="item-dots"></span>
                            <span className="item-price">0,75/1 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Сливки</span>
                            <span className="item-volume">50</span>
                            <span className="item-dots"></span>
                            <span className="item-price">0,50 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Молоко</span>
                            <span className="item-volume">50</span>
                            <span className="item-dots"></span>
                            <span className="item-price">0,50 р</span>
                        </div>
                        <div className="menu-item">
                            <span className="item-name">Альт. молоко</span>
                            <span className="item-volume">200/300</span>
                            <span className="item-dots"></span>
                            <span className="item-price">2/3 р</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* НИЖНЯЯ ЧАСТЬ - ЕДА */}
    <div className="menu-food-section">
        <div className="menu-columns">
            {/* Левая колонка - Завтраки */}
            <div className="menu-column">
                <div className="menu-category">
                    <h2 className="category-title">Завтраки</h2>
                    <div className="menu-items">
                        <div className="menu-item-large">
                            <div className="item-content">
                                <span className="item-name-large">СЫРНИКИ</span>
                                <span className="item-description">смородиновый соус, сметана, грецкий орех, сахарная пудра</span>
                            </div>
                            <span className="item-price-large">11 р</span>
                        </div>
                        <div className="menu-item-large">
                            <div className="item-content">
                                <span className="item-name-large">ОВСЯНКА №1</span>
                                <span className="item-description">овсяно-льняная каша, финики, миндаль, кокосовый топпинг</span>
                            </div>
                            <span className="item-price-large">7,5 р</span>
                        </div>
                        <div className="menu-item-large">
                            <div className="item-content">
                                <span className="item-name-large">ОВСЯНКА №2</span>
                                <span className="item-description">сыр с плесенью, груша, грецкий орех, мед</span>
                            </div>
                            <span className="item-price-large">9 р</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Правая колонка - Сэндвичи */}
            <div className="menu-column">
                <div className="menu-category">
                    <h2 className="category-title">Сэндвич или круассан</h2>
                    <div className="menu-items">
                        <div className="menu-item-large">
                            <div className="item-content">
                                <span className="item-name-large">С КУРИЦЕЙ</span>
                                <span className="item-description">французская булка, крем-чиз, копченая курица, чеддер, лук, печеные перцы</span>
                            </div>
                            <span className="item-price-large">14 р</span>
                        </div>
                        <div className="menu-item-large">
                            <div className="item-content">
                                <span className="item-name-large">С ВЕТЧИНОЙ</span>
                                <span className="item-description">французская булка, крем-чиз, ветчина, сулугуни, красный лук, микрозелень</span>
                            </div>
                            <span className="item-price-large">14 р</span>
                        </div>
                        <div className="menu-item-large">
                            <div className="item-content">
                                <span className="item-name-large">С СЫРОМ</span>
                                <span className="item-description">французская булка, крем-чиз, чеддер, сулугуни, сыр с плесенью, смородиновый соус</span>
                            </div>
                            <span className="item-price-large">14 р</span>
                        </div>
                        <div className="menu-item-large">
                            <div className="item-content">
                                <span className="item-name-large">С ЛОСОСЕМ</span>
                                <span className="item-description">французская булка, крем-чиз, подкопченный лосось, хумус, сливки, микрозелень</span>
                            </div>
                            <span className="item-price-large">15 р</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                </div>
                {/* <a href="#" className="gallery-button__link">Узнать больше</a> */}
            </section>
        </>
    );
}



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

function VideoBlock() {
    return (
        <div className="video-container">
            <div className="video-wrapper">
                <video 
                    className="video-player"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={seasonMenuPhoto1}
                    preload="none"
                >
                    <source src={cupsiVideo} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
        </div>
    );
}

function MapBlock () {
    return (
        <>
            <section className="main-block-banner shadow-box">
                <h2 className="main-block-banner__header">Приходите к нам</h2>
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.8092986209335!
                        2d27.51818342835553!3d53.885208239468!2m3!1f0!2f0!
                        3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd15625eac5f7%3A0x79d4f6801a013442!
                        2sCups%20coffee%20bar!5e0!3m2!1sru!2sby!4v1737988296870!5m2!1sru!2sby&style=feature:all|
                        element:all|hue:0xffd700|saturation:-50|lightness:0" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Карта расположения кофейни Cups coffee bar"
                    ></iframe>
                </div>
            </section>   
        </>
    );
}

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

function ReviewsBlock () {
    return (
        <div className="review-block-banner">
            <h2 className="review-block-banner__header">Ваши отзывы</h2>
            <div className="review-container">
                <div className="review-iframe-wrapper">
                    <iframe 
                        title="Отзывы CUP's" 
                        src="https://yandex.ru/maps-reviews-widget/232776647015?comments"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
}

// В Main компоненте
export default function Main() {
    return (
        <>
        <div className="main">
            <div className="main-content-row">
                <MainPhotoSlider/>
                <VideoBlock/> 
            </div>
            {/* <AdditionalBlocks/>  */}
        </div>
        <div className="main-top-row">
                <MainMenu/>
                <div className="main-top-column">
                    <MapBlock/>
                    <DessertBlock/>
                    <ReviewsBlock/>
                </div>
        </div>
        </>
    );
}

