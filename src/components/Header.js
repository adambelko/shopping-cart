import Navigation from "./Navbar/Navigation";
import MobileNavigation from "./Navbar/MobileNavigation.js";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
    return (
        <header>
            <div className="header__wrapper">
                <h1 className="header__title">
                    <span className="title-left">BOOK</span>
                    <span className="title-right">ADDICTS</span>
                </h1>
                <div className="header__menu">
                    <Navigation />
                    <div className="header__cart-wrapper">
                        <MdOutlineShoppingCart size="30px" />
                        <div className="cart-badge">1</div>
                    </div>
                    <MobileNavigation />
                </div>
            </div>
        </header>
    );
};

export default Header;
