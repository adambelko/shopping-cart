import { NavLink } from "react-router-dom";

const Navlinks = (props) => {
    return (
        <div className="navlinks">
            <ul>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink to="/Bookstore">Bookstore</NavLink>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink to="/About">About</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navlinks;
