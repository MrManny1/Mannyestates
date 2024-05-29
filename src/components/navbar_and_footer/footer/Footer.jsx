import { forwardRef } from "react";
import classes from "./Footer.module.css";
import gitLogo from "../images/github-logo.svg";
import linkedinLogo from "../images/linkedin-logo.svg"

export const Footer = forwardRef(
    
    (props, ref) => {

        return (

            <div ref={ref} className={classes.footerContainer}>

                <div className={classes.footerContent}>

                    <p className={classes.title}>
                        Contacts
                    </p>

                    <div className={classes.telephones}>

                        <p>
                            <span className={classes.telNumber}>+(234)7015682945 </span> 
                            Emmanuel Oladepo
                        </p>
                        
                        <p>
                            <span className={classes.telNumber}>+(234)8109784562 </span>
                            David Ayokanmi
                        </p>

                    </div>

                    <div className={classes.socialsBlock}>

                        <p>Find us on the socials</p>

                        <div className={classes.socialLogos}>

                            <a href={process.env.REACT_APP_GIT_LINK} target="blanc">
                                <img className={classes.gitLogo} src={gitLogo} alt="gitLogo" />
                            </a>

                            <a href={process.env.REACT_APP_LINKEDIN_LINK} target="blanc">
                                <img className={classes.linkedinLogo} src={linkedinLogo} alt="linkedinLogo" />
                            </a>

                        </div>

                    </div>

                    <div className={classes.brandBlock}>

                        <p>Manny Estates</p>
                        <p>Real Estate Company</p>

                    </div>

                </div>
                
            </div>

        );
    }
)