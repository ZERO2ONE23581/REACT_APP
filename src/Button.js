import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  //button will have a 'random' class name
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
