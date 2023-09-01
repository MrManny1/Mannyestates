import { useState } from "react";
import { sendTGNotification } from "../tg_message_sender/sendTGNotification";
import { CustomPhoneInput } from "../custom_phone_input/CustomPhoneInput";
import { PrivacyPolicy } from "../privacy_policy/PrivacyPolicy";
import { Modal } from "../modal/Modal";
import classes from "./CallbackForm.module.css";

export const CallbackForm = () => {

// <-------------------------- Handling Name input -------------------------->

    const [name, setName] = useState("");
    const [isNameEmpty, setIsNameEmpty] = useState(true);

    const nameInputHandler = (event) => {
        
        if(event.target.value !== "") setIsNameEmpty(false)
        else setIsNameEmpty(true);

        setName(event.target.value);
    };


// <-------------------------- Handling Phone number input and validation -------------------------->

    const [phoneNumber, setPhoneNumber] = useState("");
    const [isPhoneNumCorrect, setIsPhoneNumCorrect] = useState(false);

    const getNumberAndValidation = (number, validation) => {
        setPhoneNumber(number);
        setIsPhoneNumCorrect(validation);
    }


// <-------------------------- Handling Agree to privacy policy checkbox validation and visibility -------------------------->

    const [showPolicy, setShowPolicy] = useState(false);
    const [isAgree, setIsAgree] = useState(false);

    const checkboxHandler = () => {
        setIsAgree(!isAgree);
    };


// <-------------------------- Handling Message to be sent -------------------------->

    const [loading, setLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleSubmit = async () => {

        setShowErrorMessage(false);
        setShowSuccessMessage(false);

        let message = `<b>Callback form is filled!</b>\n\n<b>Client name: </b>${name}\n<b>Client number: </b>${phoneNumber}\n`;
        
        const isResponseStatusOK = await sendTGNotification(message, setLoading);

        isResponseStatusOK ? setShowSuccessMessage(true) : setShowErrorMessage(true);

        setName("");
        setIsNameEmpty(true);
    }

    
// <-------------------------- Returning HTML -------------------------->

    return (

        <div className={classes.container}>

            {/* Description Text */}

            <div className={classes.description}>

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
                    
                <p className={classes.title}>Leave your telephone number and we will contact you</p>

                <div className={classes.telephones}>

                    <p>Or contact us yourself:</p>

                    <p> 
                        <span className={classes.tel}>+7 (999) 777-77-77 </span>- John Dow
                    </p>

                    <p>
                        <span className={classes.tel}>+7 (333) 888-88-88 </span>- Haley Baley
                    </p>

                </div>

            </div>

            {/* Name Input */}

            <input className={classes.nameInput} 
                type="text" 
                value={name} 
                onChange={nameInputHandler} 
                placeholder="Your name" 
            />
                
            {/* Phone Number input */}

            <CustomPhoneInput getValues={getNumberAndValidation} />

            {/* Consult Button */}

            <button className={classes.callbackBtn} 
                disabled={!isAgree || !isPhoneNumCorrect || isNameEmpty}
                onClick={handleSubmit}
            >

                {loading ? "Loading..." : "Free consult"}

            </button>

            {/* T&C Checkbox */}

            <div className={classes.agreeCheck}>

                <input type="checkbox" onChange={checkboxHandler} />

                <label>
                    I agree to <span className={classes.privacyPolicy} onClick={() => setShowPolicy(true)}>privacy policy</span>
                </label>
            
            </div>

            <Modal visible={showPolicy} setVisible={setShowPolicy} scrollable={true}>

                <PrivacyPolicy />

            </Modal>
            
        </div>
    );
}