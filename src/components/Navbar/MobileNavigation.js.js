import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Navlinks from "./Navlinks";

const MobileNavigation = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const hamburgerIcon = (
        <GiHamburgerMenu
            className="hamburger-menu-icon"
            size="30px"
            onClick={() => setOpenMenu(!openMenu)}
        />
    );

    const closeIcon = (
        <IoMdCloseCircleOutline
            className="close-menu-icon"
            size="30px"
            onClick={() => setOpenMenu(!openMenu)}
        />
    );

    const closeMobileMenu = () => setOpenMenu(false);

    return (
        <nav className="mobile-navigation">
            {openMenu ? closeIcon : hamburgerIcon}
            {openMenu && (
                <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu} />
            )}
        </nav>
    );
};

export default MobileNavigation;
