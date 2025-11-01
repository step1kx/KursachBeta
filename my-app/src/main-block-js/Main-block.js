import React, { useState } from 'react';

import '../styles/main-block.css'
import '../styles/aside-block.css'
import '../styles/slider.css';

import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';

import cupsPhoto1 from '../assets/cupsPhoto1.webp';
import cupsPhoto2 from '../assets/cupsPhoto2.webp';
import cupsPhoto3 from '../assets/cupsPhoto3.webp';
import cupsPhoto4 from '../assets/cupsPhoto4.webp';
import cupsPhoto5 from '../assets/cupsPhoto5.webp';

import catalogPhoto1 from '../assets/cupsi.jpeg';
import catalogPhoto2 from '../assets/cupsi1.jpeg';
import catalogPhoto3 from '../assets/cupsi2.jpeg';

import seasonMenuPhoto1 from '../assets/cupsiFinal.jpg'
import seasonMenuPhoto2 from '../assets/cupsiOtvari.jpg'
import seasonMenuPhoto3 from '../assets/cupsiKakao.jpg'

import cupsiVideo from '../assets/cupsiVideo.mp4'

function MainBlock () {
    return (
        <>
            <section className="main-block-gallery shadow-box">
                <h2 className="main-block-gallery__header">Посмотрите каталог наших товаров</h2>
                <div className="gallery-container">
                    <img src={catalogPhoto1} alt="Дрип-пакеты" className="gallery-image"/>
                    <img src={catalogPhoto2} alt="Кофейные зерна" className="gallery-image"/>
                    <img src={catalogPhoto3} alt="Фильтры для кофемашин" className="gallery-image"/>
                </div>
                <a href="#" className="gallery-button__link">Узнать больше</a>
            </section>
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
                <img className="slider-arrow-img prev" src={leftArrow}></img>
            </button>
            <button className="slider-arrow next" onClick={nextSlide}>
                <img className="slider-arrow-img next" src={rightArrow}></img>
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


// В Main компоненте
export default function Main() {
    return (
        <main className="main">
            <div className="main-content-row">
                <MainPhotoSlider/>
                <VideoBlock/> 
            </div>
            {/* { <div className="main-top-row">
                <MainBlock/>
            </div> } */}
            {/* <AdditionalBlocks/>  */}
        </main>
    );
}



                // <div className="banner-container__outer">
                //     <div className="banner-container__inner">
                //         <img src={cupsPhoto1} alt="Фото магазина 1" className="banner-image"/>
                //         <img src={cupsPhoto2} alt="Фото магазина 2" className="banner-image"/>
                //         <img src={cupsPhoto3} alt="Фото магазина 3" className="banner-image"/>
                //         <img src={cupsPhoto4} alt="Фото магазина 4" className="banner-image"/>
                //         <img src={cupsPhoto5} alt="Фото магазина 5" className="banner-image"/>
                //         <img src={cupsPhoto1} alt="Фото магазина 1" className="banner-image"/>
                //         <img src={cupsPhoto2} alt="Фото магазина 2" className="banner-image"/>
                //         <img src={cupsPhoto3} alt="Фото магазина 3" className="banner-image"/>
                //         <img src={cupsPhoto4} alt="Фото магазина 4" className="banner-image"/>
                //         <img src={cupsPhoto5} alt="Фото магазина 5" className="banner-image"/>
                //     </div>
                // </div>
                // <a href="#" className="banner-button__link">Узнать больше</a>

// function AdditionalBlocks() {
//     return (
//         <div className="additional-blocks">
//             {/* Широкий блок - акция */}
//             <section className="main-block-promo shadow-box">
//                 <h2 className="main-block-promo__header">Специальное предложение</h2>
//                 <p className="main-block-promo__expl">
//                     Скидка 20% на все кофейные зерна до конца месяца!
//                 </p>
//                 <div className="promo-timer">
//                     До конца акции: 5 дней 12:30:15
//                 </div>
//                 <a href="#" className="promo-button__link">Участвовать</a>
//             </section>

//             {/* Два узких блока в ряд */}
//             <div className="row-blocks">
//                 <section className="main-block-news shadow-box">
//                     <h2 className="main-block-news__header">Новости</h2>
//                     <ul className="news-list">
//                         <li>Новый сорт кофе из Эфиопии</li>
//                         <li>Мастер-класс по завариванию</li>
//                         <li>Открытие нового филиала</li>
//                     </ul>
//                     <a href="#" className="news-button__link">Все новости</a>
//                 </section>

//                 <section className="main-block-reviews shadow-box">
//                     <h2 className="main-block-reviews__header">Отзывы</h2>
//                     <div className="review-item">
//                         "Лучший кофе в городе! 👍"
//                     </div>
//                     <div className="review-item">
//                         "Быстрая доставка, свежие зерна"
//                     </div>
//                     <a href="#" className="reviews-button__link">Оставить отзыв</a>
//                 </section>
//             </div>

//             {/* Средний блок - о нас */}
//             <section className="main-block-about shadow-box">
//                 <h2 className="main-block-about__header">О нашей компании</h2>
//                 <p className="main-block-about__text">
//                     Мы работаем с 2010 года и предлагаем только лучшие сорта кофе 
//                     со всего мира. Наша миссия - дарить вам незабываемые кофейные моменты.
//                 </p>
//                 <a href="#" className="about-button__link">Наша история</a>
//             </section>
//         </div>
//     );
// }