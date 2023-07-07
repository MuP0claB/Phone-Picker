import { NavLink } from "react-router-dom";
import Card from "../Card/Card";

import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <Card>
      <form className={styles.form}>
        <h1>SIGN UP</h1>
        <div>
          <label htmlFor="email">E-mail Address</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.btn}>
          <NavLink to="/successfull">CREATE ACCOUNT</NavLink>
        </div>
      </form>
    </Card>
  );
};

export default RegistrationForm;
