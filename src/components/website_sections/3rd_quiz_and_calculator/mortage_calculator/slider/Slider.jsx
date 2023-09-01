import { useRef, useState } from "react";
import classes from "./Slider.module.css";

export const Slider = ({ title, initValue, minValue, maxValue, stepValue, minDesc, maxDesc, handleValueChange }) => {

    const [value, setValue] = useState(initValue);
    const [position, setPosition] = useState((((initValue - minValue) / (maxValue - minValue)) * 100) + "%");
    const sliderThumbRef = useRef();
    const progressRef = useRef();

    const handleChange = (e) => {

        setValue(e.target.value);
        setPosition((((e.target.value - minValue) / (maxValue - minValue)) * 100) + "%");
        handleValueChange(e.target.value);
    }

    return (

        <div className={classes.sliderContainer}>

            <p className={classes.title}>
                {title}
            </p>
                
            <div className={classes.rangeSlider}>

                <input className={classes.slider} type="range" min={minValue} max={maxValue} value={value} step={stepValue} onChange={handleChange} />

                <div className={classes.sliderThumb} ref={sliderThumbRef} style={{left: position}}>

                    <div className={classes.tooltip}>
                        {value}
                    </div>

                </div>

                <div className={classes.progress} ref={progressRef} style={{width: position}} />

            </div>

            <div className={classes.values}>

                <div>{minDesc}</div>
                
                <div>{maxDesc}</div>

            </div>

        </div>
    );
}