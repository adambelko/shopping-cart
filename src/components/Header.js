import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

import MobileNavigation from "./Navbar/MobileNavigation.js";
import Navigation from "./Navbar/Navigation";

import "../styles/Header.scss";

const Header = (props) => {
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
                    <Navigation scrollDown={props.scrollDown} />
                    <Link to="cart">
                        <div className="header__cart-wrapper">
                            <MdOutlineShoppingCart size="30px" />
                            <div className="cart-badge">
                                {props.cart.length}
                            </div>
                        </div>
                    </Link>
                    <MobileNavigation scrollDown={props.scrollDown} />
                </div>
            </div>
        </header>
    );
};

export default Header;
