import React from 'react';
import './MainMenu.css';

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
                    <h2 className="category-title">Не кофе</h2>
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

export default MainMenu;