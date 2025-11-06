import React from 'react';
import HeaderLabel from './HeaderLabel';
import HeaderNavigation from './HeaderNavigation';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <HeaderLabel/>
            <HeaderNavigation/>
        </header>
    );
}

export default Header;