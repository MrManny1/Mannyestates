import { useState } from "react";
import { quizQuestions } from "../constants";
import { ProgressBar } from "./progress_bar/ProgressBar";
import { CustomPhoneInput } from "../../../common_components/custom_phone_input/CustomPhoneInput";
import { sendTGNotification } from "../../../common_components/tg_message_sender/sendTGNotification";
import classes from "./Quiz.module.css";

export const Quiz = () => {

// <-------------------------- Handling Multiple Choice Questions -------------------------->

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [result, setResult] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const questions = quizQuestions;
    const { question, choices, type } = questions[currentQuestion];


    const onAnswerClick = (choise) => {

        if (selectedAnswers.length === 0) {
            setSelectedAnswers([...selectedAnswers, choise]);
        } else if (selectedAnswers.includes(choise)) {
            setSelectedAnswers(selectedAnswers.filter(item => item !== choise));            
        } else {
            setSelectedAnswers([...selectedAnswers, choise]);
        }            
    }


    const onClickPrev = () => {

        setCurrentQuestion(prev => prev - 1);
        setSelectedAnswers([]);
        setResult(result.filter(item => result.indexOf(item) < currentQuestion - 1));
    }


    const onClickFinish = () => {

        setResult([...result, selectedAnswers]);
        setCurrentQuestion(0);
        setShowResult(true);
        setSelectedAnswers([]);
        createNotification([...result, selectedAnswers]);
    }


    const onClickNext = () => {

        setResult([...result, selectedAnswers]);
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswers([]);
    }


    const onTryAgain = () => {

        setResult([]);
        setShowResult(false);
    }


// <-------------------------- Handling Phone number input and validation -------------------------->

    const getNumberAndValidation = (number, validation) => {
        if (validation) setSelectedAnswers(number);
        else setSelectedAnswers([]);
    }


// <-------------------------- Handling Name input -------------------------->

    const handleNameInputChange = (event) => {
        setSelectedAnswers(event.target.value);
    }


// <-------------------------- Handling Message to be sent -------------------------->

    const [loading, setLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const createNotification = async (content) => {

        setShowErrorMessage(false);
        setShowSuccessMessage(false);

        let message = 
        `<b>Quiz was filled!</b>\n\n<b>Client's name: </b>${content[6]}\n<b>Client's number: </b>${content[7]}\n<b>Client's social(s): </b>${content[8]}\n

        <b>1: </b>${content[0]}\n
        <b>2: </b>${content[1]}\n
        <b>3: </b>${content[2]}\n
        <b>4: </b>${content[3]}\n
        <b>5: </b>${content[4]}\n
        <b>6: </b>${content[5]}\n
        `;

        const isResponseStatusOK = await sendTGNotification(message, setLoading);

        isResponseStatusOK ? setShowSuccessMessage(true) : setShowErrorMessage(true);
    }


// <-------------------------- Generating suitable Answer format UI -------------------------->

    const getAnswerUI = () => {

        if (type === "MCQ") {

            return (

                <ul className={classes.answersList}>
    
                    {choices.map(
    
                        choise => (

                            <li key={choise} >

                                <label className={classes.checkBoxInput}>

                                    <div>
                                        <input type="checkbox" onClick={() => onAnswerClick(choise)} />    
                                    </div>  

                                    {choise}

                                </label>

                            </li>

                        )
    
                    )}
    
                </ul>
            );
        }
        
        if (type === "FIB") {

            return <input className={classes.nameInput} type="text" value={selectedAnswers} onChange={handleNameInputChange} placeholder="Your name" />;

        }

        if (type === "TEL") {

            return <div className={classes.customPhoneInput}><CustomPhoneInput getValues={getNumberAndValidation} /></div>;
        }
    }


// <-------------------------- Returning HTML -------------------------->

    return (

        <div className={classes.quizContainer}>
            
            {!showResult ? 

                <div>
                    <ProgressBar currentStep={currentQuestion} totalProgress={questions.length} showFull={false} />
                    
                    <p className={classes.question}>
                        {question}
                    </p>

                    {getAnswerUI()}

                    <div className={classes.footer}>

                        <button className={classes.submitButton} onClick={onClickPrev} disabled={currentQuestion === 0}>
                            Prev
                        </button>

                        {currentQuestion === questions.length - 1 ?

                            <button className={classes.submitButton} onClick={onClickFinish} disabled={selectedAnswers.length === 0}>
                                Finish
                            </button>

                            :

                            <button className={classes.submitButton} onClick={onClickNext} disabled={selectedAnswers.length === 0}>
                                Next
                            </button>
                        }

                    </div>

                </div>

                :

                <div className={classes.result}>

                    <ProgressBar currentStep={currentQuestion} totalProgress={questions.length} showFull={true} />

                    {loading && 

                        <>
                            <p className={classes.resultTitle}>
                                Sending your answers...
                            </p>

                            <div className={classes.resultParagraph}>
                                <p>This will not take long</p>
                            </div>
                        </>
                    }

                    {showSuccessMessage && 

                        <>
                            <p className={classes.resultTitle}>
                                Your answers were sent to us
                            </p>

                            <div className={classes.resultParagraph}>

                                <p>Thank you for taking this short questionary!</p>
                                <p>We will reply you with the results in a few hours.</p>

                            </div>
                        </>
                    }

                    {showErrorMessage && 

                        <>
                            <p className={classes.resultTitle}>
                                Error! We did not receive your answers.
                            </p>

                            <div className={classes.resultParagraph}>

                                <p>Something went wrong, but we will fix it soon.</p>
                                <p>Please, try this questionary again later.</p>

                            </div>
                        </>
                    }

                    <button className={classes.submitButton} onClick={onTryAgain}>
                        Try again
                    </button>
                
                </div>

            }

        </div>
    );
}