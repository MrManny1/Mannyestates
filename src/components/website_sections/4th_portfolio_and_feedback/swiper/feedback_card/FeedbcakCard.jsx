import classes from "./FeedbackCard.module.css";
import avatar from "./avatar.svg";

export const FeedbackCard = ({ name, comment }) => {


    return (

        <div className={classes.wrapper}>

            <div className={classes.cardContainer}>

                <div className={classes.user}>

                    <div className={classes.avatar}>
                        <img className={classes.avatarImg} src={avatar} alt="avatar" />
                    </div>

                    <div className={classes.name}>
                        {name}
                    </div>

                </div>

                <hr className={classes.divider} />

                <div className={classes.comment}>

                    <div className={classes.title}>
                        Feedback:
                    </div>

                    <div className={classes.content}>
                        {comment}
                    </div>

                </div>

            </div>

        </div>
    );
}