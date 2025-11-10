import Header from '../../components/Header';
import MenuFilter from './MenuFilter/MenuFilter';
import MenuItems from './MenuItems/MenuItems';
import './MenuLink.css';

function MenuLink () {
    return (
        <div>
            <Header/>
            <div className="menulink-block">
                <MenuFilter/>
                <MenuItems/>  
            </div>
        </div>
    );
}

export default MenuLink;