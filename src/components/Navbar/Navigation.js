import "../../styles/Navigation.scss";
import Navlinks from "./Navlinks";

const Navigation = ({ scrollDown }) => {
    return (
        <nav className="navigation">
            <Navlinks scrollDown={scrollDown} />
        </nav>
    );
};

export default Navigation;
