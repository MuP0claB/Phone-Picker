import { NavLink } from "react-router-dom";
import Card from "../Card/Card";

import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <Card>
      <form className={styles.form}>
        <div>
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" />
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">E-mail Address</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.btn}>
          <NavLink to="/successfull">REGISTER</NavLink>
        </div>
      </form>
    </Card>
  );
};

export default RegistrationForm;
