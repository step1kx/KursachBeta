import React from 'react';
import './MenuItems.css';
import coffeeItem from "../../assets/coffeeItem.jpg";
import coffeeIceItem from "../../assets/coffeeIceItem.jpg";
import foodItem from "../../assets/foodItem.jpg";
import breakfastItem from "../../assets/breakfastItem.jpg";

function MenuItems({ filters }) {
    const menuData = {
        drinks: [
            {
                category: 'coffee',
                title: 'Кофе',
                items: [
                    { name: 'Эспрессо', volume: '35', price: '6 р', image: coffeeItem },
                    { name: 'Американо', volume: '180', price: '6 р', image: coffeeItem },
                    { name: 'Флэт-уайт', volume: '250', price: '7,5 р', image: coffeeItem },
                    { name: 'Капучино', volume: '250', price: '7 р', image: coffeeItem },
                    { name: 'Двойной капучино', volume: '350', price: '8 р', image: coffeeItem },
                    { name: 'Латте', volume: '350', price: '9,5 р', image: coffeeItem },
                    { name: 'Раф', volume: '350', price: '9 р', image: coffeeItem },
                    { name: 'Фильтр', volume: '200/300', price: '6,5/8 р', image: coffeeItem }
                ]
            },
            {
                category: 'cold-coffee',
                title: 'Холодное',
                items: [
                    { name: 'Айс-латте', volume: '375', price: '9,5 р', image: coffeeIceItem },
                    { name: 'Айс-какао', volume: '375', price: '9,5 р', image: coffeeIceItem },
                    { name: 'Айс-матча-латте', volume: '375', price: '9,5 р', image: coffeeIceItem },
                    { name: 'Эспрессо-тоник', volume: '375', price: '7,5 р', image: coffeeIceItem },
                    { name: 'Матча-тоник', volume: '375', price: '7 р', image: coffeeIceItem },
                    { name: 'Бамбл', volume: '375', price: '8 р', image: coffeeIceItem },
                    { name: 'Матча-бамбл', volume: '375', price: '9,5 р', image: coffeeIceItem }
                ]
            },
            {
                category: 'non-coffee',
                title: 'Не кофе',
                items: [
                    { name: 'Чай', volume: '350/700', price: '5,5/7 р', image: coffeeItem },
                    { name: 'Какао', volume: '250/350', price: '7/8 р', image: coffeeItem },
                    { name: 'Горячий шоколад', volume: '160', price: '7,5 р', image: coffeeItem },
                    { name: 'Матча латте', volume: '250/350', price: '7/8 р', image: coffeeItem }
                ]
            },
            {
                category: 'decoctions',
                title: 'Отвары',
                items: [
                    { name: 'Облепиха-имбирь', volume: '350', price: '9,5 р', image: coffeeItem },
                    { name: 'Вишня-можжевельник', volume: '350', price: '9,5 р', image: coffeeItem },
                    { name: 'Лесные ягоды', volume: '350', price: '9,5 р', image: coffeeItem }
                ]
            },
            {
                category: 'additives',
                title: 'Добавки',
                items: [
                    { name: 'Сироп', volume: '15/20', price: '0,75/1 р', image: coffeeItem },
                    { name: 'Сливки', volume: '50', price: '0,50 р', image: coffeeItem },
                    { name: 'Молоко', volume: '50', price: '0,50 р', image: coffeeItem },
                    { name: 'Альт. молоко', volume: '200/300', price: '2/3 р', image: coffeeItem }
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
                        image: breakfastItem,
                        large: true 
                    },
                    { 
                        name: 'ОВСЯНКА №1', 
                        description: 'овсяно-льняная каша, финики, миндаль, кокосовый топпинг', 
                        price: '7,5 р', 
                        image: breakfastItem,
                        large: true 
                    },
                    { 
                        name: 'ОВСЯНКА №2', 
                        description: 'сыр с плесенью, груша, грецкий орех, мед', 
                        price: '9 р', 
                        image: breakfastItem,
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
                        image: foodItem,
                        large: true 
                    },
                    { 
                        name: 'С ВЕТЧИНОЙ', 
                        description: 'французская булка, крем-чиз, ветчина, сулугуни, красный лук, микрозелень', 
                        price: '14 р', 
                        image: foodItem,
                        large: true 
                    },
                    { 
                        name: 'С СЫРОМ', 
                        description: 'французская булка, крем-чиз, чеддер, сулугуни, сыр с плесенью, смородиновый соус', 
                        price: '14 р', 
                        image: foodItem,
                        large: true 
                    },
                    { 
                        name: 'С ЛОСОСЕМ', 
                        description: 'французская булка, крем-чиз, подкопченный лосось, хумус, сливки, микрозелень', 
                        price: '15 р', 
                        image: foodItem,
                        large: true 
                    }
                ]
            }
        ]
    };

    // Исправленная функция фильтрации
    const filterItems = (items, categoryType) => {
        return items.filter(item => {
            // Фильтр по категории - проверяем категорию всей группы
            if (filters.category !== 'all' && categoryType !== filters.category) {
                return false;
            }

            // Фильтр по цене
            if (filters.priceRange !== 'all') {
                // Извлекаем числовое значение цены
                const priceText = item.price.split('/')[0]; // Берем первую цену если есть диапазон
                const price = parseFloat(priceText.replace(' р', '').replace(',', '.').trim());
                
                switch (filters.priceRange) {
                    case '0-5':
                        if (price > 5) return false;
                        break;
                    case '5-8':
                        if (price <= 5 || price > 8) return false;
                        break;
                    case '8-12':
                        if (price <= 8 || price > 12) return false;
                        break;
                    case '12+':
                        if (price <= 12) return false;
                        break;
                    default:
                        break;
                }
            }

            // Фильтр по объему
            if (filters.volume !== 'all' && item.volume) {
                const volumeText = item.volume.split('/')[0]; // Берем первый объем если есть несколько
                const volume = parseInt(volumeText);
                
                switch (filters.volume) {
                    case 'small':
                        if (volume > 200) return false;
                        break;
                    case 'medium':
                        if (volume <= 200 || volume > 300) return false;
                        break;
                    case 'large':
                        if (volume <= 300) return false;
                        break;
                    default:
                        break;
                }
            }

            return true;
        });
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

    // Исправленная функция для получения отфильтрованных категорий
    const getFilteredCategories = (categories) => {
        return categories.map(category => ({
            ...category,
            items: filterItems(category.items, category.category)
        })).filter(category => category.items.length > 0);
    };

    const filteredDrinks = getFilteredCategories(menuData.drinks);
    const filteredFood = getFilteredCategories(menuData.food);

    // Для отладки - выводим текущие фильтры
    console.log('Current filters:', filters);
    console.log('Filtered drinks:', filteredDrinks);
    console.log('Filtered food:', filteredFood);

    return (
        <div className="menu-items">
            {/* Напитки */}
            {filteredDrinks.length > 0 && (
                <div className="menu-drinks-section">
                    <div className="menu-columns">
                        <div className="menu-column">
                            {filteredDrinks.slice(0, 2).map((category, index) => (
                                <div key={index} className="menu-category">
                                    <h2 className="category-title">{category.title}</h2>
                                    <div className="menu-items-grid">
                                        {category.items.map((item, itemIndex) => renderMenuItem(item, itemIndex))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="menu-column">
                            {filteredDrinks.slice(2).map((category, index) => (
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
            )}

            {/* Еда */}
            {filteredFood.length > 0 && (
                <div className="menu-food-section">
                    <div className="menu-columns">
                        {filteredFood.map((category, index) => (
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
            )}

            {/* Сообщение если ничего не найдено */}
            {filteredDrinks.length === 0 && filteredFood.length === 0 && (
                <div className="no-results">
                    <h3>Ничего не найдено</h3>
                    <p>Попробуйте изменить параметры фильтрации</p>
                </div>
            )}
        </div>
    );
}

export default MenuItems;