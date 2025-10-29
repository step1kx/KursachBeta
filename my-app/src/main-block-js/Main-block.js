import '../styles/main-block.css'
import '../styles/aside-block.css'

import cupsPhoto1 from '../assets/cupsPhoto1.webp';
import cupsPhoto2 from '../assets/cupsPhoto2.webp';
import cupsPhoto3 from '../assets/cupsPhoto3.webp';
import cupsPhoto4 from '../assets/cupsPhoto4.webp';
import cupsPhoto5 from '../assets/cupsPhoto5.webp';

import catalogPhoto1 from '../assets/drip-bag.jpg';
import catalogPhoto2 from '../assets/coffee-beans.png';
import catalogPhoto3 from '../assets/coffee-filter.jpg';

function MainBlock () {
    return (
        <>
            <section className="main-block-banner shadow-box">
                <h2 className="main-block-banner__header">Наш кофейный магазин</h2>
                <div class="banner-container__outer">
                    <div className="banner-container__inner">
                        <img src={cupsPhoto1} alt="Фото магазина 1" className="banner-image"/>
                        <img src={cupsPhoto2} alt="Фото магазина 2" className="banner-image"/>
                        <img src={cupsPhoto3} alt="Фото магазина 3" className="banner-image"/>
                        <img src={cupsPhoto4} alt="Фото магазина 4" className="banner-image"/>
                        <img src={cupsPhoto5} alt="Фото магазина 5" className="banner-image"/>
                        <img src={cupsPhoto1} alt="Фото магазина 1" className="banner-image"/>
                        <img src={cupsPhoto2} alt="Фото магазина 2" className="banner-image"/>
                        <img src={cupsPhoto3} alt="Фото магазина 3" className="banner-image"/>
                        <img src={cupsPhoto4} alt="Фото магазина 4" className="banner-image"/>
                        <img src={cupsPhoto5} alt="Фото магазина 5" className="banner-image"/>
                    </div>
                </div>
                <a href="#" className="banner-button__link">Узнать больше</a>
            </section>
            <section className="main-block-gallery shadow-box">
                <h2 className="main-block-gallery__header">Посмотрите каталог наших товаров</h2>
                <div className="gallery-container">
                    <img src={catalogPhoto1} alt="Дрип-пакеты" className="gallery-image"/>
                    <img src={catalogPhoto2} alt="Кофейные зерна" className="gallery-image"/>
                    <img src={catalogPhoto3} alt="Фильтры для кофемашин" className="gallery-image"/>
                </div>
                <a href="#" className="gallery-button__link">Каталог</a>
            </section>
        </>
    );
}

function AdditionalBlocks() {
    return (
        <div className="additional-blocks">
            {/* Широкий блок - акция */}
            <section className="main-block-promo shadow-box">
                <h2 className="main-block-promo__header">Специальное предложение</h2>
                <p className="main-block-promo__expl">
                    Скидка 20% на все кофейные зерна до конца месяца!
                </p>
                <div className="promo-timer">
                    До конца акции: 5 дней 12:30:15
                </div>
                <a href="#" className="promo-button__link">Участвовать</a>
            </section>

            {/* Два узких блока в ряд */}
            <div className="row-blocks">
                <section className="main-block-news shadow-box">
                    <h2 className="main-block-news__header">Новости</h2>
                    <ul className="news-list">
                        <li>Новый сорт кофе из Эфиопии</li>
                        <li>Мастер-класс по завариванию</li>
                        <li>Открытие нового филиала</li>
                    </ul>
                    <a href="#" className="news-button__link">Все новости</a>
                </section>

                <section className="main-block-reviews shadow-box">
                    <h2 className="main-block-reviews__header">Отзывы</h2>
                    <div className="review-item">
                        "Лучший кофе в городе! 👍"
                    </div>
                    <div className="review-item">
                        "Быстрая доставка, свежие зерна"
                    </div>
                    <a href="#" className="reviews-button__link">Оставить отзыв</a>
                </section>
            </div>

            {/* Средний блок - о нас */}
            <section className="main-block-about shadow-box">
                <h2 className="main-block-about__header">О нашей компании</h2>
                <p className="main-block-about__text">
                    Мы работаем с 2010 года и предлагаем только лучшие сорта кофе 
                    со всего мира. Наша миссия - дарить вам незабываемые кофейные моменты.
                </p>
                <a href="#" className="about-button__link">Наша история</a>
            </section>
        </div>
    );
}

// В Main компоненте
export default function Main() {
    return (
        <main className="main">
            <div className="main-top-row">
                <MainBlock/>
            </div>
            <AdditionalBlocks/>
        </main>
    );
}