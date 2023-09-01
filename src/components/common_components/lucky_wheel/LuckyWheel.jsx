import { useRef, useState } from "react";
import { CustomPhoneInput } from "../custom_phone_input/CustomPhoneInput";
import { sendTGNotification } from "../tg_message_sender/sendTGNotification";
import classes from "./LuckyWheel.module.css";

export const LuckyWheel = ({ setShowPolicy }) => {

// <-------------------------- Handling Phone number input and validation -------------------------->

    const [phoneNumber, setPhoneNumber] = useState("");
    const [isPhoneNumCorrect, setIsPhoneNumCorrect] = useState(false);

    const getNumberAndValidation = (number, validation) => {
        setPhoneNumber(number);
        setIsPhoneNumCorrect(validation);
    }


// <-------------------------- Handling Agree to privacy policy checkbox validation and visibility -------------------------->

    const [isAgree, setIsAgree] = useState(false);

    const checkboxHandler = () => {
        setIsAgree(!isAgree);
    };

    const handlePolicyClick = () => {
        setShowPolicy(true);
    }


// <-------------------------- Setting the parameters and variables for prize wheel -------------------------->

    const prizes = [
        { id: 1, text: "Sertificate for 30$ at \"Big kitchen\" restaurant", color: "rgb(77, 124, 143)" },
        { id: 2, text: "Sertificate for 30$ for stretch ceiling mounting", color: "rgb(42, 157, 144)" },
        { id: 3, text: "Sertificate for 30$ at \"Amazon\"", color: "rgb(232, 196, 104)" },
        { id: 4, text: "Sertificate for 30$ for windows mounting", color: "rgb(244, 164, 98)" },
        { id: 5, text: "Family or individual fotosession", color: "rgb(231, 110, 80)" },
        { id: 6, text: "Discount of $30 for mortage insurance", color: "rgb(206, 59, 84)" }
    ];

    const wheelRef = useRef(null);
    const spinnerRef = useRef(null);
    const triggerRef = useRef(null);
    const tickerRef = useRef(null);

    const prizeSlice = 360 / prizes.length;
    const prizeOffset = Math.floor(180 / prizes.length);

    let tickerAnimation;
    let rotation = 0;
    let currentSlice = 0;
    let prizeNodes;


// <-------------------------- Defining prize wheel functionality -------------------------->

    const spinInertia = (min, max) => {
    
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    };
    
    const triggerOnClickEventFunction = () => {

        prizeNodes = spinnerRef.current.querySelectorAll(`.${classes.prize}`);

        triggerRef.current.disabled = true;
        rotation = Math.floor(Math.random() * 360 + spinInertia(2000, 5000));
        prizeNodes.forEach(prize => prize.classList.remove(classes.selected));
        wheelRef.current.classList.add(classes.isSpinning);
        spinnerRef.current.style.setProperty("--rotate", rotation);
        tickerRef.current.style.animation = "none";

        runTickerAnimation();
    };

    const runTickerAnimation = () => {

        const values = window.getComputedStyle(spinnerRef.current).transform.split("(")[1].split(")")[0].split(",");
        const a = values[0];
        const b = values[1];
        let rad = Math.atan2(b, a);
    
        if (rad < 0) rad += (2 * Math.PI);
    
        const angle = Math.round(rad * (180 / Math.PI));
        const slice = Math.floor(angle / prizeSlice);
    
        if (currentSlice !== slice) {
    
            tickerRef.current.style.animation = "none";
            setTimeout(() => tickerRef.current.style.animation = null, 10);
            currentSlice = slice;
        }
    
        tickerAnimation = requestAnimationFrame(runTickerAnimation);
    };

    const spinnerTransitionEndEventFunction = () => {

        cancelAnimationFrame(tickerAnimation);

        rotation %= 360;
        const prize = selectPrize();
        wheelRef.current.classList.remove(classes.isSpinning);
        spinnerRef.current.style.setProperty("--rotate", rotation);
        triggerRef.current.disabled = false;

        handleSubmit(prize);
    };

    const selectPrize = () => {

        const selected = Math.floor(rotation / prizeSlice);
        prizeNodes[selected].classList.add(classes.selected);

        return prizes[selected];
    };


// <-------------------------- Handling Message to be sent -------------------------->

    const [loading, setLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleSubmit = async (prize) => {

        setShowErrorMessage(false);
        setShowSuccessMessage(false);

        let message = `<b>Prize wheel spinned!</b>\n\n<b>Client number: </b>${phoneNumber}\n<b>Prize: </b>${prize.text}`;
        
        const isResponseStatusOK = await sendTGNotification(message, setLoading);

        isResponseStatusOK ? setShowSuccessMessage(true) : setShowErrorMessage(true);
    }


// <-------------------------- Returning HTML -------------------------->

    return (

        <div className={classes.componentContainer}>

            {/* Wheel block */}

            <div className={classes.dealWheel} ref={wheelRef}>

                {/* Prizes */}

                <ul className={classes.spinner} onTransitionEnd={spinnerTransitionEndEventFunction}
                    style={{background: 
                            `conic-gradient(from -90deg,
                                ${prizes.map(
                                    ({ color }, index) => `${color} 0 ${(100 / prizes.length) * (prizes.length - index)}%`
                                ).reverse()}
                            )`
                        }
                    }
                    ref={spinnerRef}
                >

                    {prizes.map(

                        ({ id, text, reaction}, index) => (

                            <li key={id} className={classes.prize} data-reaction={reaction} 
                                style={{transform: `rotate(${((prizeSlice * index) * -1) - prizeOffset}deg`}}
                            >

                                <span className={classes.text}>
                                    {text}
                                </span>

                            </li>

                        )
                    )}

                </ul>

                {/* Spinner Ticker */}

                <div className={classes.ticker} ref={tickerRef} />

            </div>

            {/* Input form block */}

            <div className={classes.description}>

                <div className={classes.title}>
                    Test your luck
                </div>                

                <div className={classes.promotion}>
                    <span>Enter your phone number, </span>
                    <span>spin the wheel and get your gift</span>
                </div>

                {showSuccessMessage && 

                    <div className={classes.successMessage}>
                        Thank you! We will contact you soon.
                    </div>
                }

                {showErrorMessage && 

                    <div className={classes.errorMessage}>
                        Error! Try again later.
                    </div>
                }

                {/* Phone Number input */}

                <CustomPhoneInput getValues={getNumberAndValidation} />

                {/* Spin Button */}

                <button className={classes.spinBtn} 
                    disabled={!isAgree || !isPhoneNumCorrect } 
                    onClick={triggerOnClickEventFunction} 
                    ref={triggerRef}
                >
                    {loading ? "Loading..." : "Rotate"}
                </button>

                {/* T&C checkbox */}

                <div className={classes.agreeCheck}>

                    <input type="checkbox" onChange={checkboxHandler} />

                    <label>
                        I agree to <span className={classes.privacyPolicy} onClick={handlePolicyClick}>privacy policy</span>
                    </label>
                
                </div>

            </div>

        </div>

    );
}