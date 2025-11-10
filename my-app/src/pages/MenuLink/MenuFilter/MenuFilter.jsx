import React, { useState } from 'react';
import './MenuFilter.css';

function MenuFilter() {
    const [filters, setFilters] = useState({
        category: 'all',
        priceRange: 'all',
        volume: 'all'
    });

    const categories = [
        { value: 'all', label: 'Все категории' },
        { value: 'coffee', label: 'Кофе' },
        { value: 'cold-coffee', label: 'Холодное кофе' },
        { value: 'non-coffee', label: 'Не кофе' },
        { value: 'decoctions', label: 'Отвары' },
        { value: 'additives', label: 'Добавки' },
        { value: 'breakfast', label: 'Завтраки' },
        { value: 'sandwiches', label: 'Сэндвичи' }
    ];

    const priceRanges = [
        { value: 'all', label: 'Любая цена' },
        { value: '0-5', label: 'До 5 руб' },
        { value: '5-8', label: '5-8 руб' },
        { value: '8-12', label: '8-12 руб' },
        { value: '12+', label: 'От 12 руб' }
    ];

    const volumes = [
        { value: 'all', label: 'Любой объем' },
        { value: 'small', label: 'До 200 мл' },
        { value: 'medium', label: '200-300 мл' },
        { value: 'large', label: 'От 300 мл' }
    ];

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const clearFilters = () => {
        setFilters({
            category: 'all',
            priceRange: 'all',
            volume: 'all'
        });
    };

    return (
        <div className="menu-filter">
            <h3 className="filter-title">Фильтры</h3>
            
            <div className="filter-group">
                <label className="filter-label">Категория</label>
                <select 
                    className="filter-select"
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                >
                    {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>
                            {cat.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label className="filter-label">Цена</label>
                <select 
                    className="filter-select"
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                >
                    {priceRanges.map(range => (
                        <option key={range.value} value={range.value}>
                            {range.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label className="filter-label">Объем</label>
                <select 
                    className="filter-select"
                    value={filters.volume}
                    onChange={(e) => handleFilterChange('volume', e.target.value)}
                >
                    {volumes.map(vol => (
                        <option key={vol.value} value={vol.value}>
                            {vol.label}
                        </option>
                    ))}
                </select>
            </div>

            <button className="clear-filters-btn" onClick={clearFilters}>
                Сбросить фильтры
            </button>
        </div>
    );
}

export default MenuFilter;