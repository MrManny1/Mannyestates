import classes from "./Modal.module.css";
import xButton from "./close-btn.svg";

export const Modal = ({ visible, setVisible, scrollable, children }) => {

    return (

        <div className={`${classes.modal} ${visible && classes.modalActive}`} onClick={() => setVisible(false)}>

            <div className={`
                    ${classes.modalContent} 
                    ${visible && classes.modalContentActive}
                    ${scrollable && classes.scrollable}
                `} 
                onClick={(event) => event.stopPropagation()}
            >

                <button className={classes.closeBtn} onClick={() => setVisible(false)}>

                    <img className={classes.xLogo} src={xButton} width={30} alt="close" />
                    
                </button>

                {children}

            </div>

        </div>
    );
}