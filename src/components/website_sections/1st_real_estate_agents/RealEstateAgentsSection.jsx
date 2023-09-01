import { CallbackForm } from "../../common_components/callback_form/CallbackForm";
import classes from "./RealEstateAgentsSection.module.css";

export const RealEstateAgentsSection = () => {

    return (

        <div className={classes.sectionContainer}>

            <section className={classes.filter}>

                <div className={classes.innerBody}>

                    <div className={classes.textBlock}>

                        <p className={classes.titleBig}>
                            <span className={classes.orangeTitleText}>Real estate agents</span> in Saint-Petersburg
                        </p>

                        <div className={classes.titleSmall}>
                            <span className={classes.orangeTitleText}>Real estate agents</span> 
                            <p className={classes.whiteTitleText}>in Saint-Petersburg</p>
                        </div>

                        <ul className={classes.descriptionList}>

                            <li>

                                <span className={classes.boldText}>
                                    Free of charge 
                                </span>

                                &nbsp;consultation on selection of residential and commercial real estate properties in new buildings
                                
                            </li>

                            <li>
                                We will help you benefit by investing into real estate
                            </li>
                            
                            <li>
                                We will help you sell your estate quikly and profitably
                            </li>

                        </ul>

                    </div>
                        
                    <CallbackForm />

                </div>

            </section>

        </div>

    );
}