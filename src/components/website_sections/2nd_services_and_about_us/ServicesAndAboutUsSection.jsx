import { forwardRef } from "react";
import { serviceCards, values } from "./constants";
import photo from "./images/second-background.jpg";
import classes from "./ServicesAndAboutUsSection.module.css";

export const ServicesAndAboutUsSection = forwardRef( 
    
    (props, ref) => {

        return (

            <div ref={ref} className={classes.sectionContainer}>

                {/* Title */}

                <div className={classes.sectionTitle}>

                    <div className={classes.bigText}>
                        Our Services
                    </div>

                    <div className={classes.smallText}>
                        All kind of services for selection of newly built apartments are provided free of charge.
                        For selection of secondary housing price is negotiable.
                    </div>

                </div>

                {/* Cards Section */}

                <div className={classes.cardsBlock}>

                    {serviceCards.map(

                        card => (

                            <div key={card.id} className={classes.card}>

                                <div className={classes.cardTitle}>
                                    {card.title}
                                </div>

                                <div className={classes.cardBrief}>
                                    {card.brief}
                                </div>

                                <div className={classes.cardPrice}>
                                    {card.price}
                                </div>

                                <div className={classes.cardDescription}>

                                    {card.desc.map(

                                        serv => (
                                            
                                            (serv.startsWith("*") &&

                                            <div key={serv} className={classes.cardServ}>
                                                <br /> <br /> <br /> <br /> <br /> <br />
                                                {serv}
                                            </div>)
                                            
                                            ||

                                            <p key={serv} className={classes.cardServ}>
                                                <span className={classes.checkMark}>&#9745; </span>{serv}
                                            </p>

                                        )
                                    )}

                                </div>

                            </div>

                        )

                    )}

                </div>

                {/* About Us Section */}

                <div className={classes.aboutUs}>

                    <div className={classes.aboutUsTextBlock}>

                        <div className={classes.aboutUsDesc}>

                            <p className={classes.aboutUsTitle}>
                                About Us
                            </p>

                            <div className={classes.aboutUsDescText}>
                                Welcome in the most honest community about sqare meters!
                                We are John Dow and Haley Baley - experts in the field of 
                                real estate in Saint-Petersburg.
                            </div>

                        </div>
                        
                        <div className={classes.aboutUsValues}>

                            {values.map(

                                value => (

                                    <div key={value.id} className={classes.aboutUsValue}>

                                        <img className={classes.valueSymbol} src={value.symbol} alt="symbol" />

                                        <p className={classes.valueTitle}>
                                            {value.title}
                                        </p>

                                        <div className={classes.valueDesc}>
                                            
                                            {value.desc.map( 
                                                
                                                str => (

                                                    (str.startsWith("&#8226;") && 
                                                    
                                                    <p key={str}>&#8226; {str.substring(8)}</p>) 

                                                    || 

                                                    <p key={str}>{str}</p>
                                                )

                                            )}

                                        </div>
                                                    
                                    </div>
                                )
                            )}

                        </div>
                    
                    </div>
                    
                    <div className={classes.aboutUsImg}>

                        <img src={photo} alt="img" />

                    </div>

                </div>
                
            </div>
        );  
    }
)