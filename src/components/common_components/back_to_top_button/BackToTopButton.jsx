import { useEffect, useState } from "react";
import classes from "./BackToTopButton.module.css";
import arrow from "./arrow-symbol.svg"

export const BackToTopButton = () => {

    const [visible, setVisible] = useState(false);

    useEffect(

        () => {

            window.addEventListener(

                "scroll", () => {

                    window.scrollY > 800 ? setVisible(true) : setVisible(false);
                }
            )

        }, []

    );

    const scrollBackUp = () => {

        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (

        <div>

            {visible &&
                
                <button className={classes.backToTopBtn} onClick={scrollBackUp}>
                    <img className={classes.arrow} src={arrow} alt="^" />
                </button>
            }

        </div>
    );
}