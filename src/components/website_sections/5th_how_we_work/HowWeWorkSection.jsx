import { values } from "./constants";
import photo from "./images/fifth-background.jpg";
import classes from "./HowWeWorkSection.module.css";

export const HowWeWorkSection = () => {

    return (

        <div className={classes.sectionContainer}>

            <div className={classes.sectionTitle}>
                How we work
            </div>

            <div className={classes.sectionTextBlock}>

                <div className={classes.greyLine}></div>

                {values.map(

                    value => (

                        <div key={value.id} className={classes.valueCard}>

                            <div className={classes.valueNumCircle}>
                                {value.id}
                            </div>

                            <div className={classes.valueText}>

                                <p className={classes.valueTitle}>
                                    {value.title}
                                </p>

                                <p className={classes.valueDesc}>
                                    {value.description}
                                </p>

                            </div>

                        </div>

                    )

                )}

            </div>

            <div className={classes.background}>

                <img className={classes.btImg} src={photo} alt="" />

            </div>

        </div>
    );
}