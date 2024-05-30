import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import classes from "./CustomPhoneInput.module.css";

export const CustomPhoneInput = ({ getValues, bgColor }) => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const phoneRegex = /^\+[\d]{1} \([\d]{2,3}\) [\d]{2,3}-[\d]{2,3}-[\d]{2}$/;

    const setPhoneNumberToRuCode = () => {
        setPhoneNumber("234");
        phoneNumberInputHandler("234");
    };

    const phoneNumberInputHandler = (event) => {

        let inputNumber = String(event).replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3-$4-$5");
        
        if(inputNumber.match(phoneRegex)) {
            getValues(inputNumber, true);
        } else {
            getValues(inputNumber, false);
        }

        setPhoneNumber(inputNumber);

    };


    return (

        <PhoneInput value={phoneNumber}
            onChange={phoneNumberInputHandler} 
            onFocus={setPhoneNumberToRuCode}
            specialLabel={false} 
            placeholder="+234 (XXX) XXX-XX-XX" 
            autoFormat={true}
            inputClass={classes.phoneInput}
            inputStyle={bgColor && {background: bgColor}}
        />
    );
}