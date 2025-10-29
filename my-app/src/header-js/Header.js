import '../styles/header.css';

function HeaderLabel () {
    return (
        <h2 className="headerlabel-title"><a className="headerlabel-title-link" href="#">CUP's</a></h2>
    );
}

function HeaderNavigation () {
    return (
        <nav className="headernav-nav">
            <ul className="headernav-menu">
                <li className="headernav-menu-item">
                   <a href="#" className="headernav-menu-link">Каталог</a>
                </li>
                <li className="headernav-menu-item">
                    <a href="#" className="headernav-menu-link">Контакты</a>
                </li>
                <li className="headernav-menu-item">
                    <a href="#" className="headernav-menu-link">Личный кабинет</a>
                </li>
                <li className="headernav-menu-item">
                    <a href="#" className="headernav-menu-link">Корзина</a>
                </li>
            </ul>
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
