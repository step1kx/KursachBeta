import React from 'react';
import './MenuItems.css';

function MenuItems() {
    const menuData = {
        drinks: [
            {
                category: 'coffee',
                title: 'Кофе',
                items: [
                    { name: 'Эспрессо', volume: '35', price: '6 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Американо', volume: '180', price: '6 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Флэт-уайт', volume: '250', price: '7,5 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Капучино', volume: '250', price: '7 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Двойной капучино', volume: '350', price: '8 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Латте', volume: '350', price: '9,5 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Раф', volume: '350', price: '9 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Фильтр', volume: '200/300', price: '6,5/8 р', image: '../../../assets/catBarista.jpg' }
                ]
            },
            {
                category: 'cold-coffee',
                title: 'Холодное',
                items: [
                    { name: 'Айс-латте', volume: '375', price: '9,5 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Айс-какао', volume: '375', price: '9,5 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Айс-матча-латте', volume: '375', price: '9,5 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Эспрессо-тоник', volume: '375', price: '7,5 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Матча-тоник', volume: '375', price: '7 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Бамбл', volume: '375', price: '8 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Матча-бамбл', volume: '375', price: '9,5 р', image: '../../../assets/catBarista.jpg' }
                ]
            },
            {
                category: 'non-coffee',
                title: 'Не кофе',
                items: [
                    { name: 'Чай', volume: '350/700', price: '5,5/7 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Какао', volume: '250/350', price: '7/8 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Горячий шоколад', volume: '160', price: '7,5 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Матча латте', volume: '250/350', price: '7/8 р', image: '../../../assets/catBarista.jpg' }
                ]
            },
            {
                category: 'decoctions',
                title: 'Отвары',
                items: [
                    { name: 'Облепиха-имбирь', volume: '350', price: '9,5 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Вишня-можжевельник', volume: '350', price: '9,5 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Лесные ягоды', volume: '350', price: '9,5 р', image: '../../../assets/catBarista.jpg' }
                ]
            },
            {
                category: 'additives',
                title: 'Добавки',
                items: [
                    { name: 'Сироп', volume: '15/20', price: '0,75/1 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Сливки', volume: '50', price: '0,50 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Молоко', volume: '50', price: '0,50 р', image: '../../../assets/catBarista.jpg' },
                    { name: 'Альт. молоко', volume: '200/300', price: '2/3 р', image: '../../../assets/catBarista.jpg' }
                ]
            }
        ],
        food: [
            {
                category: 'breakfast',
                title: 'Завтраки',
                items: [
                    { 
                        name: 'СЫРНИКИ', 
                        description: 'смородиновый соус, сметана, грецкий орех, сахарная пудра', 
                        price: '11 р', 
                        image: '../../../assets/catBarista.jpg',
                        large: true 
                    },
                    { 
                        name: 'ОВСЯНКА №1', 
                        description: 'овсяно-льняная каша, финики, миндаль, кокосовый топпинг', 
                        price: '7,5 р', 
                        image: '../../../assets/catBarista.jpg',
                        large: true 
                    },
                    { 
                        name: 'ОВСЯНКА №2', 
                        description: 'сыр с плесенью, груша, грецкий орех, мед', 
                        price: '9 р', 
                        image: '../../../assets/catBarista.jpg',
                        large: true 
                    }
                ]
            },
            {
                category: 'sandwiches',
                title: 'Сэндвич или круассан',
                items: [
                    { 
                        name: 'С КУРИЦЕЙ', 
                        description: 'французская булка, крем-чиз, копченая курица, чеддер, лук, печеные перцы', 
                        price: '14 р', 
                        image: '../../../assets/catBarista.jpg',
                        large: true 
                    },
                    { 
                        name: 'С ВЕТЧИНОЙ', 
                        description: 'французская булка, крем-чиз, ветчина, сулугуни, красный лук, микрозелень', 
                        price: '14 р', 
                        image: '../../../assets/catBarista.jpg',
                        large: true 
                    },
                    { 
                        name: 'С СЫРОМ', 
                        description: 'французская булка, крем-чиз, чеддер, сулугуни, сыр с плесенью, смородиновый соус', 
                        price: '14 р', 
                        image: '../../../assets/catBarista.jpg',
                        large: true 
                    },
                    { 
                        name: 'С ЛОСОСЕМ', 
                        description: 'французская булка, крем-чиз, подкопченный лосось, хумус, сливки, микрозелень', 
                        price: '15 р', 
                        image: '../../../assets/catBarista.jpg',
                        large: true 
                    }
                ]
            }
        ]
    };

    const renderMenuItem = (item, index) => {
        if (item.large) {
            return (
                <div key={index} className="menu-item-card-large">
                    <div className="item-image">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-content">
                        <h3 className="item-name-large">{item.name}</h3>
                        <p className="item-description">{item.description}</p>
                        <div className="item-details">
                            <span className="item-price-large">{item.price}</span>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div key={index} className="menu-item-card">
                <div className="item-image">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="item-content">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-details">
                        <span className="item-volume">{item.volume} мл</span>
                        <span className="item-dots"></span>
                        <span className="item-price">{item.price}</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="menu-items">
            {/* Напитки */}
            <div className="menu-drinks-section">
                <div className="menu-columns">
                    <div className="menu-column">
                        {menuData.drinks.slice(0, 2).map((category, index) => (
                            <div key={index} className="menu-category">
                                <h2 className="category-title">{category.title}</h2>
                                <div className="menu-items-grid">
                                    {category.items.map((item, itemIndex) => renderMenuItem(item, itemIndex))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="menu-column">
                        {menuData.drinks.slice(2).map((category, index) => (
                            <div key={index} className="menu-category">
                                <h2 className="category-title">{category.title}</h2>
                                <div className="menu-items-grid">
                                    {category.items.map((item, itemIndex) => renderMenuItem(item, itemIndex))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Еда */}
            <div className="menu-food-section">
                <div className="menu-columns">
                    {menuData.food.map((category, index) => (
                        <div key={index} className="menu-column">
                            <div className="menu-category">
                                <h2 className="category-title">{category.title}</h2>
                                <div className="menu-items-grid">
                                    {category.items.map((item, itemIndex) => renderMenuItem(item, itemIndex))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MenuItems;