import Navigation from "./Navbar/Navigation";
import MobileNavigation from "./Navbar/MobileNavigation.js";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../styles/Header.scss";
import { Link } from "react-router-dom";

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
