import { useEffect, useState } from "react";
import classes from "./CallButton.module.css";
import phoneLogo from "./phone-ringing-symbol.svg";
import xLogo from "./x-symbol.svg";
import { CallbackForm } from "../callback_form/CallbackForm";

export const CallButton = () => {

    const [visible, setVisible] = useState(false);
    const [clicked, setClicked] = useState(false);    

    useEffect(

        () => {

            window.addEventListener(

                "scroll", () => {

                    if (window.scrollY > 800) {
                        setVisible(true) 
                    } else {
                        setVisible(false);
                        setClicked(false);
                    }
                }
            )

        }, []

    );

    return (

        <div className={classes.container}>

            { (clicked && visible) && 
            
                <div className={classes.formWrapper}>
                    <CallbackForm />
                </div> 
            
            }

            { visible && 
            
                <button className={`${classes.phoneBtn} ${clicked && classes.phoneBtnActive}`} onClick={() => setClicked(!clicked)}>  

                    { clicked ? 

                        <img className={classes.xPhoneImg} src={xLogo} alt="phone" /> 

                        :
                    
                        <img className={classes.ringPhoneImg} src={phoneLogo} alt="phone" /> 
                    
                    }

                </button>

            }

        </div>
    );
}