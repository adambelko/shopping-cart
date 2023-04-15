import { NavLink } from "react-router-dom";
import cart from "../assets/images/cart.png";

const Header = () => {
    return (
        <header>
            <div className="header__wrapper">
                <h1 className="header__title">
                    <span className="title-left">BOOK</span>
                    <span className="title-right">ADDICTS</span>
                </h1>
                <div className="header__right">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Store">Store</NavLink>
                            </li>
                            <li>
                                <NavLink to="/About">About</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <label className="header__hamburger-menu">
                        <input type="checkbox" />
                    </label>
                    <aside className="sidebar">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Store">Store</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/About">About</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div className="header__cart-wrapper">
                        <img src={cart} alt="cart-img" />
                    </div>
                    <div className="header__cart-badge">1</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
