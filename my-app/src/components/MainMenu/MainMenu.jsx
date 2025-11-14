import React from 'react';
import './MainMenu.css';

function MainMenu () {
    return (
        <>
            <section className="main-block-menu shadow-box">
                <h2 className="main-block-menu__header">Наше меню</h2>
                <div className="menu-container">
<div className="main-menu-container">
    {/* Заголовок */}
    <div className="main-menu-header">
        <h1 className="main-menu-title">CUP's</h1>
        <p className="main-menu-subtitle">coffee bar</p>
    </div>

    {/* ВЕРХНЯЯ ЧАСТЬ - НАПИТКИ */}
    <div className="main-menu-drinks-section">
        <div className="main-menu-columns">
            {/* Левая колонка - 2 блока */}
            <div className="main-menu-column">
                {/* Кофе */}
                <div className="main-menu-category">
                    <h2 className="main-menu-category-title">Кофе</h2>
                    <div className="main-menu-items">
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Эспрессо</span>
                            <span className="main-menu-item-volume">35</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">6 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Американо</span>
                            <span className="main-menu-item-volume">180</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">6 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Флэт-уайт</span>
                            <span className="main-menu-item-volume">250</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">7,5 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Капучино</span>
                            <span className="main-menu-item-volume">250</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">7 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Двойной капучино</span>
                            <span className="main-menu-item-volume">350</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">8 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Латте</span>
                            <span className="main-menu-item-volume">350</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">9,5 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Раф</span>
                            <span className="main-menu-item-volume">350</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">9 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Фильтр</span>
                            <span className="main-menu-item-volume">200/300</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">6,5/8 р</span>
                        </div>
                    </div>
                </div>

                {/* Холодное кофе */}
                <div className="main-menu-category">
                    <h2 className="main-menu-category-title">Холодное</h2>
                    <div className="main-menu-items">
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Айс-латте</span>
                            <span className="main-menu-item-volume">375</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">9,5 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Айс-какао</span>
                            <span className="main-menu-item-volume">375</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">9,5 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Айс-матчаа-латте</span>
                            <span className="main-menu-item-volume">375</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">9,5 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Эспрессо-тоник</span>
                            <span className="main-menu-item-volume">375</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">7,5 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Матча-тоник</span>
                            <span className="main-menu-item-volume">375</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">7 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Бамбл</span>
                            <span className="main-menu-item-volume">375</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">8 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Матча-бамбл</span>
                            <span className="main-menu-item-volume">375</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">9,5 р</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Правая колонка - 3 блока */}
            <div className="main-menu-column">
                {/* Не кофе */}
                <div className="main-menu-category">
                    <h2 className="main-menu-category-title">Не кофе</h2>
                    <div className="main-menu-items">
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Чай</span>
                            <span className="main-menu-item-volume">350/700</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">5,5/7 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Какао</span>
                            <span className="main-menu-item-volume">250/350</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">7/8 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Горячий шоколад</span>
                            <span className="main-menu-item-volume">160</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">7,5 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Матча латте</span>
                            <span className="main-menu-item-volume">250/350</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">7/8 р</span>
                        </div>
                    </div>
                </div>

                {/* Отвары */}
                <div className="main-menu-category">
                    <h2 className="main-menu-category-title">Отвары</h2>
                    <div className="main-menu-items">
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Облепиха-имбирь</span>
                            <span className="main-menu-item-volume">350</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">9,5 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Вишня-можжевельник</span>
                            <span className="main-menu-item-volume">350</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">9,5 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Лесные ягоды</span>
                            <span className="main-menu-item-volume">350</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">9,5 р</span>
                        </div>
                    </div>
                </div>

                {/* Добавки */}
                <div className="main-menu-category">
                    <h2 className="main-menu-category-title">Добавки</h2>
                    <div className="main-menu-items">
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Сироп</span>
                            <span className="main-menu-item-volume">15/20</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">0,75/1 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Сливки</span>
                            <span className="main-menu-item-volume">50</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">0,50 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Молоко</span>
                            <span className="main-menu-item-volume">50</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">0,50 р</span>
                        </div>
                        <div className="main-menu-item">
                            <span className="main-menu-item-name">Альт. молоко</span>
                            <span className="main-menu-item-volume">200/300</span>
                            <span className="main-menu-item-dots"></span>
                            <span className="main-menu-item-price">2/3 р</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* НИЖНЯЯ ЧАСТЬ - ЕДА */}
    <div className="main-menu-food-section">
        <div className="main-menu-columns">
            {/* Левая колонка - Завтраки */}
            <div className="main-menu-column">
                <div className="main-menu-category">
                    <h2 className="main-menu-category-title">Завтраки</h2>
                    <div className="main-menu-items">
                        <div className="main-menu-item-large">
                            <div className="main-menu-item-content">
                                <span className="main-menu-item-name-large">СЫРНИКИ</span>
                                <span className="main-menu-item-description">смородиновый соус, сметана, грецкий орех, сахарная пудра</span>
                            </div>
                            <span className="main-menu-item-price-large">11 р</span>
                        </div>
                        <div className="main-menu-item-large">
                            <div className="main-menu-item-content">
                                <span className="main-menu-item-name-large">ОВСЯНКА №1</span>
                                <span className="main-menu-item-description">овсяно-льняная каша, финики, миндаль, кокосовый топпинг</span>
                            </div>
                            <span className="main-menu-item-price-large">7,5 р</span>
                        </div>
                        <div className="main-menu-item-large">
                            <div className="main-menu-item-content">
                                <span className="main-menu-item-name-large">ОВСЯНКА №2</span>
                                <span className="main-menu-item-description">сыр с плесенью, груша, грецкий орех, мед</span>
                            </div>
                            <span className="main-menu-item-price-large">9 р</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Правая колонка - Сэндвичи */}
            <div className="main-menu-column">
                <div className="main-menu-category">
                    <h2 className="main-menu-category-title">Сэндвич или круассан</h2>
                    <div className="main-menu-items">
                        <div className="main-menu-item-large">
                            <div className="main-menu-item-content">
                                <span className="main-menu-item-name-large">С КУРИЦЕЙ</span>
                                <span className="main-menu-item-description">французская булка, крем-чиз, копченая курица, чеддер, лук, печеные перцы</span>
                            </div>
                            <span className="main-menu-item-price-large">14 р</span>
                        </div>
                        <div className="main-menu-item-large">
                            <div className="main-menu-item-content">
                                <span className="main-menu-item-name-large">С ВЕТЧИНОЙ</span>
                                <span className="main-menu-item-description">французская булка, крем-чиз, ветчина, сулугуни, красный лук, микрозелень</span>
                            </div>
                            <span className="main-menu-item-price-large">14 р</span>
                        </div>
                        <div className="main-menu-item-large">
                            <div className="main-menu-item-content">
                                <span className="main-menu-item-name-large">С СЫРОМ</span>
                                <span className="main-menu-item-description">французская булка, крем-чиз, чеддер, сулугуни, сыр с плесенью, смородиновый соус</span>
                            </div>
                            <span className="main-menu-item-price-large">14 р</span>
                        </div>
                        <div className="main-menu-item-large">
                            <div className="main-menu-item-content">
                                <span className="main-menu-item-name-large">С ЛОСОСЕМ</span>
                                <span className="main-menu-item-description">французская булка, крем-чиз, подкопченный лосось, хумус, сливки, микрозелень</span>
                            </div>
                            <span className="main-menu-item-price-large">15 р</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                </div>
            </section>
        </>
    );
}

export default MainMenu;