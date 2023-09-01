import { useState } from 'react';
import { Modal } from "../modal/Modal";
import { LuckyWheel } from '../lucky_wheel/LuckyWheel';
import { PrivacyPolicy } from '../privacy_policy/PrivacyPolicy';
import classes from "./Gift.module.css";
import gift from "./a-gift-box.svg";

export const Gift = () => {

    /*  Since the PrivacyPolicy PopUp is using the same Modal component as the LuckyWheel PopUp,
        the states and the ternary operator are used to determine which component to render. 
        Otherwise it would have been PrivacyPolicy modal inside of a LuckyWheel modal.      */

    const [showLuckyWheel, setShowLuckyWheel] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);

    return (

        <div>

            <button className={classes.giftBtn} onClick={() => setShowLuckyWheel(true)}>  

                <img className={classes.giftImg} src={gift} alt="gift" />

            </button>

            {showPolicy ?

                <Modal visible={showPolicy} setVisible={setShowPolicy} scrollable={true}>
                    <PrivacyPolicy />
                </Modal>

                :

                <Modal visible={showLuckyWheel} setVisible={setShowLuckyWheel} scrollable={false}>
                    <LuckyWheel setShowPolicy={setShowPolicy} />
                </Modal>

            }

        </div>
    );
}