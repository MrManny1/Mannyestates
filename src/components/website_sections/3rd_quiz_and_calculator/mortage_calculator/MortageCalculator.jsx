import { useState } from "react";
import { Slider } from "./slider/Slider";
import classes from "./MortageCalculator.module.css";

export const MortageCalculator = () => {

    const [loanValue, setLoanValue] = useState(230000);
    const [initPayment, setInitPayment] = useState(15);
    const [percentageValue, setPercentageValue] = useState(9.1);
    const [timeValue, setTimeValue] = useState(120);

    const handleLoanChange = (newLoanValue) => {
        setLoanValue(newLoanValue);
    }

    const handleInitPaymentChange = (newInitPaymentValue) => {
        setInitPayment(newInitPaymentValue);
    }

    const handlePercentageChange = (newPercentageValue) => {
        setPercentageValue(newPercentageValue);
    }

    const handleTimeChange = (newTimeValue) => {
        setTimeValue(newTimeValue);
    }

    function getMonthlyPayment() {
        const remainingLoan = loanValue - (loanValue * initPayment / 100);
        const totalInterest = Math.pow( (1 + (percentageValue / 1200)), timeValue );
        const monthlyPayment = (remainingLoan * (percentageValue / 1200) * totalInterest) / (totalInterest - 1);

        return Math.round(monthlyPayment);
    }

    return (

        <div className={classes.calculatorContainer}>

            <p className={classes.title}>
                Mortage Calculator
            </p>

            <Slider title={"Cost of the estate"}
                initValue={230000} 
                minValue={70000} 
                maxValue={400000} 
                stepValue={10000}
                minDesc={"$ 70 000"} 
                maxDesc={"$ 400 000"}
                handleValueChange={handleLoanChange}
            />

            <Slider title={"Initial payment"} 
                initValue={15} 
                minValue={0} 
                maxValue={50} 
                stepValue={1}
                minDesc={"0%"} 
                maxDesc={"50%"}
                handleValueChange={handleInitPaymentChange}
            />

            <Slider title={"Interest rate"} 
                initValue={9.1} 
                minValue={0.1} 
                maxValue={12} 
                stepValue={0.1}
                minDesc={"0.1%"} 
                maxDesc={"12%"}
                handleValueChange={handlePercentageChange}
            />

            <Slider title={"Loan term"} 
                initValue={120} 
                minValue={12} 
                maxValue={360} 
                stepValue={1}
                minDesc={"12 months"} 
                maxDesc={"360 month"}
                handleValueChange={handleTimeChange}
            />

            <hr />

            <div className={classes.result}>

                Monthly payment: <span className={classes.amount}>$ {getMonthlyPayment()}</span>

            </div>

        </div>
    );
}