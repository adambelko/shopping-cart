import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Navlinks from "./Navlinks";

import "../../styles/MobileNavigation.scss";

const MobileNavigation = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuIcon = (
        <GiHamburgerMenu
            className="mobile-navigation__menu-icon"
            size="30px"
            onClick={() => setOpenMenu(!openMenu)}
        />
    );

    const closeIcon = (
        <IoMdCloseCircleOutline
            className="mobile-navigation__close-menu-icon"
            size="30px"
            onClick={() => setOpenMenu(!openMenu)}
        />
    );

    const closeMobileMenu = () => setOpenMenu(false);

    return (
        <nav className="mobile-navigation">
            {openMenu ? closeIcon : menuIcon}
            {openMenu && (
                <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu} />
            )}
        </nav>
    );
};

export default MobileNavigation;
