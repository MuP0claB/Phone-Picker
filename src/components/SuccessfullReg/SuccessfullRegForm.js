import { NavLink } from "react-router-dom";
import styles from "./SuccessfullRegForm.module.css";

const SuccessfullRegForm = () => {
  return (
    <div className="container">
      <div className={styles.message}>
        <h2>CONGRATULATIONS 🎉</h2>
        <p>YOU HAVE SUCCESSFULLY REGISTERED ON OUR PLATFORM</p>
      </div>
      <div className={styles.login}>
        <NavLink to="/login">LOGIN</NavLink>
      </div>
    </div>
  );
};

export default SuccessfullRegForm;
