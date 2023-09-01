import { useEffect, useState } from "react";
import classes from "./ProgressBar.module.css";

export const ProgressBar = ({ currentStep, totalProgress, showFull }) => {

    const [progressLoaded, setProgressLoaded] = useState(0);

    useEffect(

        () => {

            setProgressLoaded((currentStep / totalProgress) * 100);

        }, [currentStep, totalProgress]
    )

    return (

        <div className={classes.progressBar}>
            
            <div style={{
                    width: `${showFull ? 100 : progressLoaded}%`,
                    backgroundColor: `${progressLoaded === 0 ? "lightgreen" : progressLoaded < 40 ? "red" : progressLoaded < 70 ? "orange" : "lightgreen"}`
                }} 
                className={classes.progress}
            />

        </div>
    );
}