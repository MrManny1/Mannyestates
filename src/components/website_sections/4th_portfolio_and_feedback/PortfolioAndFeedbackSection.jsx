import { forwardRef } from "react";
import { FeedbackSwiper } from "./swiper/FeedbackSwiper";
import classes from "./PortfolioAndFeedbackSection.module.css";
import firstPic from "./images/new-photo-1.jpg";
import secondPic from "./images/new-photo-2.jpg";
import thirdPic from "./images/new-photo-3.jpg";
import fourthPic from "./images/new-photo-4.jpg";
import fifthPic from "./images/new-photo-5.jpg";
import sixthPic from "./images/new-photo-6.jpg";
import seventhPic from "./images/new-photo-7.jpg";

export const PortfolioAndFeedbackSection = forwardRef(

    (props, ref) => {

        const pictures = [firstPic, secondPic, thirdPic, fourthPic, fifthPic, sixthPic, seventhPic];

        return (

            <div className={classes.sectionContainer}>

                {/* Portfolio Section */}

                <div className={classes.portfolioBlock}>

                    <div className={classes.sectionTitle}>

                        <p className={classes.bigText}>Our Portfolio</p>

                        <p className={classes.smallText}>Examples of sold apartments</p>

                    </div>

                    <div className={classes.picturesBlock}>

                        {pictures.map(

                            (picture, index) => (

                                <div key={index} className={classes.imgDiv}>
                                    <img className={classes.appartmentImg} src={picture} alt={index} width={374} />
                                </div>

                            )

                        )}

                    </div>

                </div>

                {/* Feedback Section */}

                <div ref={ref} className={classes.feedbackBlock}>

                    <div className={classes.sectionTitle}>

                        <p className={classes.bigText}>Our clients Feedback</p>

                    </div>

                    <FeedbackSwiper />

                </div>

            </div>

        );

    }

)