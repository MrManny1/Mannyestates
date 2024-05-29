import { forwardRef } from "react";
import { ConsultationRequestForm } from "./consultation_request_form/ConsultationRequestForm";
import classes from "./EstimateCostSection.module.css";

export const EstimateCostSection = forwardRef(

    (props, ref) => {

        return (

            <div ref={ref} className={classes.sectionContainer}>

                <div className={classes.sectionTitle}>

                    <p><span className={classes.orangeText}>Estimate the cost </span> of the property</p>

                    <p className={classes.subTitle}>Send us your telephone number to get a free consultation</p>

                </div>

                <ConsultationRequestForm />

            </div>
        );
    }
)