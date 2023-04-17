import Navlinks from "./Navlinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const MobileNavigation = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const hamburgerIcon = (
        <GiHamburgerMenu
            className="hamburger-menu"
            size="30px"
            onClick={() => setOpenMenu(!openMenu)}
        />
    );

    const closeIcon = (
        <IoMdCloseCircleOutline
            className="hamburger-menu"
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
