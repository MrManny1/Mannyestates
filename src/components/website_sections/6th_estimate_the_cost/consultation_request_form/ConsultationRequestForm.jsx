import { useState } from "react";
import { sendTGNotification } from "../../../common_components/tg_message_sender/sendTGNotification";
import { CustomPhoneInput } from "../../../common_components/custom_phone_input/CustomPhoneInput";
import { Modal } from "../../../common_components/modal/Modal";
import { PrivacyPolicy } from "../../../common_components/privacy_policy/PrivacyPolicy";
import classes from "./ConsultationRequestForm.module.css";

export const ConsultationRequestForm = () => {

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


// <-------------------------- Handling Comment input -------------------------->

    const [comment, setComment] = useState("");

    const commentInputHandler = (event) => {

        setComment(event.target.value);
    };


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

        let message = `<b>Consultation form is filled!</b>\n\n<b>Client name: </b>${name}\n<b>Client number: </b>${phoneNumber}\n<b>Comments: </b>${comment}`;
        
        const isResponseStatusOK = await sendTGNotification(message, setLoading);

        isResponseStatusOK ? setShowSuccessMessage(true) : setShowErrorMessage(true);

        setName("");
        setIsNameEmpty(true);
        setComment("");
    }


// <-------------------------- Returning HTML -------------------------->

    return (

        <div className={classes.container}>

            {showSuccessMessage && 

                <div className={classes.successMessage}>
                    Thank you! We will contact you soon.
                </div>
            }

            {showErrorMessage && 

                <div className={classes.errorMessage}>
                    Error! Please, try again later.
                </div>
            }

            {/* Name Input */}

            <input className={classes.nameInput} 
                type="text" 
                value={name} 
                onChange={nameInputHandler} 
                placeholder="Your name" 
            />
                
            {/* Phone Number input */}

            <CustomPhoneInput getValues={getNumberAndValidation} bgColor={"white"}/>

            {/* Comment Input */}

            <textarea className={classes.commentInput} 
                type="text"
                rows={3}
                value={comment} 
                onChange={commentInputHandler} 
                placeholder="Leave your comments / wishes here..." 
            />

            {/* Consult Button */}

            <button className={classes.callbackBtn} 
                disabled={!isAgree || !isPhoneNumCorrect || isNameEmpty}
                onClick={handleSubmit}
            >

                {loading? "Loading..." : "Get free consultation"}

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