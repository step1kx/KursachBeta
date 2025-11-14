import React, { useState, useEffect } from 'react';
import './MainMenu.css';
import coffeeItem from "../../assets/coffeeItem.jpg";
// import coffeeIceItem from "../../assets/coffeeIceItem.jpg";
// import foodItem from "../../assets/foodItem.jpg";
// import breakfastItem from "../../assets/breakfastItem.jpg";

function MainMenu() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderItems = [
        // Кофе
        { name: 'Эспрессо', volume: '35', price: '6 р', image: coffeeItem, description: 'Классический эспрессо с насыщенным вкусом и ароматом' },
        { name: 'Капучино', volume: '250', price: '7 р', image: coffeeItem, description: 'Классический капучино с воздушной молочной пеной' },
        { name: 'Латте', volume: '350', price: '9,5 р', image: coffeeItem, description: 'Нежный кофе с большим количеством молока' },
        
        // Не кофе
        { name: 'Чай', volume: '350/700', price: '5,5/7 р', image: coffeeItem, description: 'Различные сорта чая' },
        { name: 'Какао', volume: '250/350', price: '7/8 р', image: coffeeItem, description: 'Горячий шоколадный напиток' },
        { name: 'Матча латте', volume: '250/350', price: '7/8 р', image: coffeeItem, description: 'Традиционный японский чай с молоком' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [sliderItems.length]);

    const getVisibleItems = () => {
        const items = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + sliderItems.length) % sliderItems.length;
            items.push({
                ...sliderItems[index],
                position: i
            });
        }
        return items;
    };

    const handleLearnMore = () => {
        // Здесь будет переход на полное меню
        console.log('Переход на полное меню');
    };

    return (
        <>
            <section className="main-block-menu shadow-box">
                {/* <h2 className="main-block-menu__header">Наше меню</h2> */}
                <div className="menu-container">
                    <div className="main-menu-container">
                        {/* Заголовок */}
                        <div className="main-menu-header">
                            <h1 className="main-menu-title">CUP's</h1>
                            <p className="main-menu-subtitle">coffee bar</p>
                        </div>

                        {/* Слайдер */}
                        <div className="menu-slider-container">
                            <div className="menu-slider">
                                {getVisibleItems().map((item, index) => (
                                    <div
                                        key={`${item.name}-${index}`}
                                        className={`slider-card ${item.position === 0 ? 'active' : ''} ${item.position === -1 ? 'left' : ''} ${item.position === 1 ? 'right' : ''}`}
                                    >
                                        <div className="item-image-small">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="item-info">
                                            <h3 className="item-name-small">{item.name}</h3>
                                            <div className="item-volume-small">{item.volume} мл</div>
                                            <div className="item-price-small">{item.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Кнопка */}
                            <button className="submit-btn menu-learn-more-btn" onClick={handleLearnMore}>
                                Узнать больше
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MainMenu;