import { NavLink } from "react-router-dom";
import Card from "../Card/Card";

import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <Card>
      <form className={styles.form}>
        <h1>SIGN UP</h1>
        <div>
          <label htmlFor="email">Your E-mail</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.btn}>
          <button type="button">CREATE ACCOUNT</button>
          <button type="button" className={styles.toggle}>LOGIN WITH EXISTING ACCOUNT</button>
        </div>
      </form>
    </Card>
  );
};

export default RegistrationForm;
