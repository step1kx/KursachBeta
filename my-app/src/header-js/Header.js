import '../styles/header.css';
import backetIcon from '../assets/market-backet.png';
import cupsLogo from '../assets/cupsLogo.png';

function HeaderLabel () {
    return (
        <>
            <div className="headerlabel-container">
                <h2 className="headerlabel-title">
                    <a className="headerlabel-title-link" href="#">
                        CUP's    
                    </a>
                </h2>
                
                <div className="dropdown-menu">
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Сезонное меню</a></div>
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Меню</a></div>
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Товары</a></div>
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Местоположение</a></div>
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>График работы</a></div>
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Отзывы</a></div>
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>О нас</a></div>
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Контакты</a></div>
                    <div className="dropdown-item"><a className='dropdown-item-link' href='#'>Служба поддержки</a></div>
                </div>
            </div>
            <h3 className="headerlabel-subtitle">coffee bar</h3>
        </>
    );
}

function HeaderNavigation () {
    return (
        <nav className="headernav-nav">
            <a className="headernav-menu-link" href='#'>
                <img src={backetIcon} alt="Иконка корзины" className="headernav-menu-image"></img>
            </a>
        </nav>
    );
}


export default function Header() {
    return (
        <header className="header">
            <HeaderLabel/>
            <HeaderNavigation/>
        </header>
    );
}
