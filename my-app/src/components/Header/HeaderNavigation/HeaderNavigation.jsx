import React from 'react';
import backetIcon from '../../../assets/Group.png';
import './HeaderNavigation.css';

function HeaderNavigation() {
    return (
        <nav className="headernav-nav">
            <a className="headernav-menu-link" href='#'>
                Личный кабинет
                <img src={backetIcon} alt="Иконка профиля" className="headernav-menu-image"></img>
            </a>
        </nav>
    );
}

export default HeaderNavigation;