import cart from "../assets/images/cart.png";
import Navigation from "./Navbar/Navigation";
import MobileNavigation from "./Navbar/MobileNavigation.js";

const Header = () => {
    return (
        <header>
            <div className="header__wrapper">
                <h1 className="header__title">
                    <span className="title-left">BOOK</span>
                    <span className="title-right">ADDICTS</span>
                </h1>
                <div className="header__right">
                    <Navigation />
                    <div className="header__cart-wrapper">
                        <img src={cart} alt="cart" />
                        <div className="header__cart-badge">1</div>
                    </div>
                    <MobileNavigation />
                </div>
            </div>
        </header>
    );
};

export default Header;
