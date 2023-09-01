import { forwardRef } from "react";
import { MortageCalculator } from "./mortage_calculator/MortageCalculator";
import { Quiz } from "./quiz/Quiz";
import { values } from "./constants";
import classes from "./QuizAndCalculatorSection.module.css";

export const QuizAndCalculatorSection = forwardRef(

    (props, ref) => {

        const handleLearnMoreClick = () => {

            if (props.consultFormRef === null | props.consultFormRef.current === null) return;

            if (props.consultFormRef.current !== null) {
                props.consultFormRef.current.scrollIntoView({ behavior: "smooth" });
            }

        };

        return (

            <div ref={ref} className={classes.sectionContainer}>

                {/* Title */}

                <div className={classes.sectionTitle}>

                    Take a quick questionary and we will answer all Your questions for free

                </div>

                {/* Quiz Section */}

                <div className={classes.quizBlock}>

                    <Quiz />

                </div>

                {/* About Us Section */}

                <div className={classes.aboutUs}>

                    <p className={classes.aboutUsTitle}>
                        Why people come to Us
                    </p>

                    <div className={classes.aboutUsValues}>

                        {values.map(

                            value => (

                                <div key={value.id} className={classes.aboutUsValue}>

                                    <img className={classes.valueSymbol} src={value.symbol} alt="symbol" />

                                    <div className={classes.valueDesc}>

                                        {value.desc.map(

                                            str => <p key={str}>{str}</p>

                                        )}

                                    </div>

                                </div>
                            )
                        )}

                    </div>

                </div>

                {/* Calculator Section */}

                <div className={classes.calculatorBlock}>

                    <div className={classes.background}>

                        <div>

                            <p className={classes.bgTitle}>
                                Mortage from 0.1%
                            </p>

                            <p className={classes.bgText}>
                                Hurry up to get a mortage with good interest rate
                            </p>

                        </div>

                        <button className={classes.learnMoreBtn} onClick={handleLearnMoreClick}>
                            Learn more
                        </button>

                    </div>

                    <MortageCalculator />

                </div>

            </div>
        );
    }
)