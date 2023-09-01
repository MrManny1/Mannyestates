import { useState } from "react";
import classes from "./Navbar.module.css";
import brandLogo from "../images/navbar-logo.png";
import hambMenu from "../images/hamburger-menu.svg";
import xMenu from "../images/x-menu.svg";
import gitLogo from "../images/github-logo.svg";
import gitLogoBlack from "../images/github-logo-black.svg";
import linkedinLogo from "../images/linkedin-logo.svg"
import linkedinLogoBlack from "../images/linkedin-logo-black.svg"

export const Navbar = ({ refs }) => {

    const { servicesRef, promotionsRef, feedbackRef, articlesRef, contactsRef } = refs;

    const menuItems = [
        
        { title: "Services",        ref: servicesRef   },
        { title: "Promotions",      ref: promotionsRef },
        { title: "Calculator",      ref: promotionsRef },
        { title: "Feedback",        ref: feedbackRef   },
        { title: "Useful articles", ref: articlesRef   },
        { title: "Contact us",      ref: contactsRef   }
    ];


    const [hamburgerClicked, setHamburgerClicked] = useState(false);

    const handleHamburgerClick = () => {
        setHamburgerClicked(!hamburgerClicked);
    };


//<--------------------- Handle Navigation functionality --------------------->

    const scrollToSection = (title, ref) => {

        if (ref === null | ref.current === null) return;

        if (ref.current !== null) {

            if (title === "Calculator") {
                ref.current.scrollIntoView({behavior: "smooth", block: "end"});
            } else {
                ref.current.scrollIntoView({behavior: "smooth"});
            }
            
        } 
    };


//<--------------------- Configure and return UI for Navbar buttons --------------------->

    const getMenuAndSocialsUI = (isMobileSize) => {

        return (

            <>
                {/* Navigation buttons */}

                <ul className={isMobileSize ? `${classes.navbarMenuActive}` : `${classes.navbarMenu}`}>

                    {menuItems.map(

                        (item, index) => (

                            <li key={index}>

                                <div className={classes.navbarLinks} onClick={() => scrollToSection(item.title, item.ref)}>
                                    {item.title}
                                </div>

                            </li>
                        )
                    )}

                </ul>

                {/* Socials buttons*/}

                <div className={isMobileSize ? `${classes.socialLogosActive}` : `${classes.socialLogos}`}>

                    <a href={process.env.REACT_APP_GIT_LINK} target="blanc">
                        <img className={classes.gitLogo} src={isMobileSize ? gitLogoBlack : gitLogo} alt="gitLogo" />
                    </a>

                    <a href={process.env.REACT_APP_LINKEDIN_LINK} target="blanc">
                        <img className={classes.linkedinLogo} src={isMobileSize ? linkedinLogoBlack : linkedinLogo} alt="linkedinLogo" />
                    </a>

                </div>
            </>

        );
    }


//<--------------------- Return HTML --------------------->

    return(

        <div className={classes.navbar}>

            <nav className={classes.navbarItems}>

                {/* Brand Logo */}

                <div className={classes.navbarLogo}>

                    <a href={process.env.REACT_APP_GIT_LINK} target="blanc">
                        <img className={classes.logoImg} src={brandLogo} alt="Logo" />
                    </a>

                </div>

                {/* HamburgerMenu icon / CloseMenu icon */}

                <div className={classes.menuIcon} onClick={handleHamburgerClick}>

                    {hamburgerClicked 
                        ? <img className={classes.xIcon} src={xMenu} alt="hambMenu" /> 
                        : <img className={classes.hamburgerIcon} src={hambMenu} alt="xMenu" /> 
                    }

                </div>

                {getMenuAndSocialsUI(false)}

            </nav>

            {/* Mobile dropdown menu */}

            {hamburgerClicked && getMenuAndSocialsUI(true)}

        </div>

    );
}