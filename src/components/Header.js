import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

import MobileNavigation from "./Navbar/MobileNavigation.js";
import Navigation from "./Navbar/Navigation";

import "../styles/Header.scss";

const Header = ({ scrollDown }) => {
    return (
        <header>
            <div className="header__wrapper">
                <Link to="/">
                    <h1 className="header__title">
                        <span className="title-left">PAGE</span>
                        <span className="title-right">TURNERS</span>
                    </h1>
                </Link>
                <div className="header__menu">
                    <Navigation scrollDown={scrollDown} />
                    <Link to="cart">
                        <div className="header__cart-wrapper">
                            <MdOutlineShoppingCart size="30px" />
                            <div className="cart-badge">1</div>
                        </div>
                        <MobileNavigation />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
