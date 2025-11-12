import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLabel.css';

function HeaderLabel() {
    return (
        <>
            <div className="headerlabel-container">
                <h2 className="headerlabel-title">
                    <Link className="headerlabel-title-link" to="/">
                        CUP's   
                    </Link>
                </h2>
                
                <div className="dropdown-menu">
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Сезонное меню</a></div>
                    <div className="dropdown-item">
                        <Link className='dropdown-item-link' to='/menu'>Меню</Link>
                    </div>
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Товары</a></div>
                    {/* <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Местоположение</a></div>
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>График работы</a></div>
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Контакты</a></div> */}
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>О нас</a></div>
                    {/* <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Ваши отзывы</a></div> */}
                    <div className="dropdown-item">
                        <Link className='dropdown-item-link' to='/support'>Служба поддержки</Link>
                    </div>
                </div>
            </div>
            <h3 className="headerlabel-subtitle">coffee bar</h3>
        </>
    );
}

export default HeaderLabel;