import React from 'react';
import { Link } from 'react-router-dom';
import backetIcon from '../../../assets/Group.png';
import './HeaderNavigation.css';

function HeaderNavigation() {
    return (
        <nav className="headernav-nav">
            <button className="headernav-menu-button">
                <Link className="headernav-menu-link" to="/login">
                    Войти
                    <img src={backetIcon} alt="Иконка профиля" className="headernav-menu-image"></img>
                </Link>
            </button>
        </nav>
    );
}

export default HeaderNavigation;