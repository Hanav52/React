import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}) {
    return (
        <button className={styles.btn} >{text}</button>
    );
}

Button.prototype = {
    test: PropTypes.string.isRequired,
}
export default Button;