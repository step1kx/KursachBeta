import React from 'react';
import backetIcon from '../../../assets/Group.png';
import './HeaderNavigation.css';

function HeaderNavigation() {
    return (
        <nav className="headernav-nav">
            <button className="headernav-menu-button">
                <a className="headernav-menu-link" href='#'>
                    Войти
                    <img src={backetIcon} alt="Иконка профиля" className="headernav-menu-image"></img>
                </a>
            </button>
        </nav>
    );
}

export default HeaderNavigation;