import { NavLink } from "react-router-dom";

const Navlinks = (props) => {
    return (
        <div className="navlinks">
            <ul>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink to="/bookstore">Bookstore</NavLink>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navlinks;
