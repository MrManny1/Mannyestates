import { forwardRef } from "react";
import { articles } from "./constants";
import classes from "./ArticlesSection.module.css";

export const ArticlesSection = forwardRef(
    
    (props, ref) => {

        return (

            <div ref={ref} className={classes.sectionContainer}>

                {/* Title */}

                <div className={classes.sectionTitle}>
                        
                    Most recent articles from our community

                </div>

                {/* VK Ad */}

                <div className={classes.promoContainer}>

                    <p className={classes.description}>
                        Join our community to be the first to know about any changes onthe real estate market 
                        and to be provided with the most interesting offers
                    </p>

                    <a href={process.env.REACT_APP_LINKEDIN_LINK} target="blanc">
                        <button className={classes.readBtn}>
                            LinkedIn Community
                        </button>
                    </a>

                </div>

                {/* Articles Section */}

                <div className={classes.articlesBlock}>

                    {articles.map(

                        article => (

                            <div key={article.id} className={classes.articleContainer}>

                                <img className={classes.articleCover} src={article.img} width={360} alt="cover" />

                                <div className={classes.articleTitle}>
                                    {article.title}
                                </div>

                                <div className={classes.articleBrief}>
                                    {article.brief}
                                </div>

                                <a href={process.env.REACT_APP_GIT_LINK} target="blanc">
                                    <button className={classes.readBtn}>
                                        Read
                                    </button>
                                </a>
                                
                            </div>

                        )

                    )}

                </div>

            </div>
        );
    }
)