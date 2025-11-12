import React, { useState } from 'react';
import './MenuItems.css';
import coffeeItem from "../../assets/coffeeItem.jpg";
import coffeeIceItem from "../../assets/coffeeIceItem.jpg";
import foodItem from "../../assets/foodItem.jpg";
import breakfastItem from "../../assets/breakfastItem.jpg";

function MenuItems({ filters }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const menuData = {
        drinks: [
            {
                category: 'coffee',
                title: 'Кофе',
                items: [
                    { name: 'Эспрессо', volume: '35', price: '6 р', image: coffeeItem, description: 'Классический эспрессо с насыщенным вкусом и ароматом' },
                    { name: 'Американо', volume: '180', price: '6 р', image: coffeeItem, description: 'Эспрессо с добавлением горячей воды' },
                    { name: 'Флэт-уайт', volume: '250', price: '7,5 р', image: coffeeItem, description: 'Кофе с молоком и тонкой молочной пенкой' },
                    { name: 'Капучино', volume: '250', price: '7 р', image: coffeeItem, description: 'Классический капучино с воздушной молочной пеной' },
                    { name: 'Двойной капучино', volume: '350', price: '8 р', image: coffeeItem, description: 'Увеличенная порция капучино' },
                    { name: 'Латте', volume: '350', price: '9,5 р', image: coffeeItem, description: 'Нежный кофе с большим количеством молока' },
                    { name: 'Раф', volume: '350', price: '9 р', image: coffeeItem, description: 'Кофе со сливками и ванильным сахаром' },
                    { name: 'Фильтр', volume: '200/300', price: '6,5/8 р', image: coffeeItem, description: 'Альтернативный способ заваривания кофе' }
                ]
            },
            {
                category: 'cold-coffee',
                title: 'Холодное',
                items: [
                    { name: 'Айс-латте', volume: '375', price: '9,5 р', image: coffeeIceItem, description: 'Холодный латте со льдом' },
                    { name: 'Айс-какао', volume: '375', price: '9,5 р', image: coffeeIceItem, description: 'Охлажденный какао-напиток' },
                    { name: 'Айс-матча-латте', volume: '375', price: '9,5 р', image: coffeeIceItem, description: 'Холодный матча-латте' },
                    { name: 'Эспрессо-тоник', volume: '375', price: '7,5 р', image: coffeeIceItem, description: 'Эспрессо с тоником и льдом' },
                    { name: 'Матча-тоник', volume: '375', price: '7 р', image: coffeeIceItem, description: 'Матча с тоником' },
                    { name: 'Бамбл', volume: '375', price: '8 р', image: coffeeIceItem, description: 'Освежающий кофейный напиток' },
                    { name: 'Матча-бамбл', volume: '375', price: '9,5 р', image: coffeeIceItem, description: 'Матча-версия напитка бамбл' }
                ]
            },
            {
                category: 'non-coffee',
                title: 'Не кофе',
                items: [
                    { name: 'Чай', volume: '350/700', price: '5,5/7 р', image: coffeeItem, description: 'Различные сорта чая' },
                    { name: 'Какао', volume: '250/350', price: '7/8 р', image: coffeeItem, description: 'Горячий шоколадный напиток' },
                    { name: 'Горячий шоколад', volume: '160', price: '7,5 р', image: coffeeItem, description: 'Насыщенный горячий шоколад' },
                    { name: 'Матча латте', volume: '250/350', price: '7/8 р', image: coffeeItem, description: 'Традиционный японский чай с молоком' }
                ]
            },
            {
                category: 'decoctions',
                title: 'Отвары',
                items: [
                    { name: 'Облепиха-имбирь', volume: '350', price: '9,5 р', image: coffeeItem, description: 'Тонизирующий отвар из облепихи и имбиря' },
                    { name: 'Вишня-можжевельник', volume: '350', price: '9,5 р', image: coffeeItem, description: 'Фруктовый отвар с ягодами' },
                    { name: 'Лесные ягоды', volume: '350', price: '9,5 р', image: coffeeItem, description: 'Ароматный отвар из лесных ягод' }
                ]
            },
            {
                category: 'additives',
                title: 'Добавки',
                items: [
                    { name: 'Сироп', volume: '15/20', price: '0,75/1 р', image: coffeeItem, description: 'Различные сиропы для кофе' },
                    { name: 'Сливки', volume: '50', price: '0,50 р', image: coffeeItem, description: 'Свежие сливки' },
                    { name: 'Молоко', volume: '50', price: '0,50 р', image: coffeeItem, description: 'Молоко для кофе' },
                    { name: 'Альт. молоко', volume: '200/300', price: '2/3 р', image: coffeeItem, description: 'Альтернативное молоко (овсяное, миндальное)' }
                ]
            }
        ],
        food: [
            {
                category: 'breakfast',
                title: 'Завтраки',
                items: [
                    { name: 'СЫРНИКИ', description: 'смородиновый соус, сметана, грецкий орех, сахарная пудра', price: '11 р', image: breakfastItem, detailedDescription: 'Нежные сырники с ягодным соусом и орехами' },
                    { name: 'ОВСЯНКА №1', description: 'овсяно-льняная каша, финики, миндаль, кокосовый топпинг', price: '7,5 р', image: breakfastItem, detailedDescription: 'Питательная овсяная каша с сухофруктами' },
                    { name: 'ОВСЯНКА №2', description: 'сыр с плесенью, груша, грецкий орех, мед', price: '9 р', image: breakfastItem, detailedDescription: 'Овсянка с сыром и фруктами' }
                ]
            },
            {
                category: 'sandwiches',
                title: 'Сэндвич или круассан',
                items: [
                    { name: 'С КУРИЦЕЙ', description: 'французская булка, крем-чиз, копченая курица, чеддер, лук, печеные перцы', price: '14 р', image: foodItem, detailedDescription: 'Сэндвич с копченой курицей и сыром' },
                    { name: 'С ВЕТЧИНОЙ', description: 'французская булка, крем-чиз, ветчина, сулугуни, красный лук, микрозелень', price: '14 р', image: foodItem, detailedDescription: 'Сэндвич с ветчиной и сыром сулугуни' },
                    { name: 'С СЫРОМ', description: 'французская булка, крем-чиз, чеддер, сулугуни, сыр с плесенью, смородиновый соус', price: '14 р', image: foodItem, detailedDescription: 'Сырный сэндвич с ягодным соусом' },
                    { name: 'С ЛОСОСЕМ', description: 'французская булка, крем-чиз, подкопченный лосось, хумус, сливки, микрозелень', price: '15 р', image: foodItem, detailedDescription: 'Сэндвич с лососем и хумусом' }
                ]
            }
        ]
    };

    const filterItems = (items, categoryType) => {
        return items.filter(item => {
            if (filters.category !== 'all' && categoryType !== filters.category) return false;

            if (filters.priceRange !== 'all') {
                const priceText = item.price.split('/')[0];
                const price = parseFloat(priceText.replace(' р', '').replace(',', '.').trim());
                switch (filters.priceRange) {
                    case '0-5': if (price > 5) return false; break;
                    case '5-8': if (price <= 5 || price > 8) return false; break;
                    case '8-12': if (price <= 8 || price > 12) return false; break;
                    case '12+': if (price <= 12) return false; break;
                    default: break;
                }
            }

            if (filters.volume !== 'all' && item.volume) {
                const volumeText = item.volume.split('/')[0];
                const volume = parseInt(volumeText);
                switch (filters.volume) {
                    case 'small': if (volume > 200) return false; break;
                    case 'medium': if (volume <= 200 || volume > 300) return false; break;
                    case 'large': if (volume <= 300) return false; break;
                    default: break;
                }
            }

            return true;
        });
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    const renderMenuItem = (item, index) => {
        return (
            <div key={index} className="menu-item-card-with-image" onClick={() => handleItemClick(item)}>
                <div className="item-image-small">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                    <h3 className="item-name-small">{item.name}</h3>
                    <div className="item-volume-small">{item.volume} мл</div>
                    <div className="item-price-small">{item.price}</div>
                </div>
            </div>
        );
    };

    const renderFoodItem = (item, index) => {
        return (
            <div key={index} className="menu-item-card-with-image food" onClick={() => handleItemClick(item)}>
                <div className="item-image-small">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                    <h3 className="item-name-small">{item.name}</h3>
                    <p className="item-description-small">{item.description}</p>
                    <div className="item-price-small">{item.price}</div>
                </div>
            </div>
        );
    };

    const getFilteredCategories = (categories) => {
        return categories.map(category => ({
            ...category,
            items: filterItems(category.items, category.category)
        })).filter(category => category.items.length > 0);
    };

    const filteredDrinks = getFilteredCategories(menuData.drinks);
    const filteredFood = getFilteredCategories(menuData.food);

    return (
        <div className="menu-items">
            {/* Напитки */}
            {filteredDrinks.length > 0 && (
                <div className="menu-drinks-section">
                    {filteredDrinks.map((category, index) => (
                        <div key={index} className="menu-category">
                            <h2 className="category-title">{category.title}</h2>
                            <div className="menu-items-row">
                                {category.items.map((item, itemIndex) => renderMenuItem(item, itemIndex))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Еда */}
            {filteredFood.length > 0 && (
                <div className="menu-food-section">
                    {filteredFood.map((category, index) => (
                        <div key={index} className="menu-category">
                            <h2 className="category-title">{category.title}</h2>
                            <div className="menu-items-row">
                                {category.items.map((item, itemIndex) => renderFoodItem(item, itemIndex))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Модальное окно с описанием */}
            {selectedItem && (
                <div className="item-modal-overlay" onClick={closeModal}>
                    <div className="item-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <div className="modal-image">
                            <img src={selectedItem.image} alt={selectedItem.name} />
                        </div>
                        <h3 className="modal-item-name">{selectedItem.name}</h3>
                        {selectedItem.volume && <p className="modal-item-volume">{selectedItem.volume} мл</p>}
                        <p className="modal-item-description">
                            {selectedItem.detailedDescription || selectedItem.description}
                        </p>
                        <div className="modal-item-price">{selectedItem.price}</div>
                    </div>
                </div>
            )}

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