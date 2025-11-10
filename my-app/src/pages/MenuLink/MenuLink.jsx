import React, { useState } from 'react';
import Header from '../../components/Header';
import MenuFilter from '../../components/MenuFilter/MenuFilter';
import MenuItems from '../../components/MenuItems/MenuItems';
import './MenuLink.css';

function MenuLink() {
    const [filters, setFilters] = useState({
        category: 'all',
        priceRange: 'all',
        volume: 'all'
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const clearFilters = () => {
        setFilters({
            category: 'all',
            priceRange: 'all',
            volume: 'all'
        });
    };

    return (
        <div>
            <Header/>
            <div className="menulink-block">
                <h2 className="menulink-block__header">Меню</h2>
                <MenuFilter 
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={clearFilters}
                />
                <MenuItems filters={filters} />  
            </div>
        </div>
    );
}

export default MenuLink;