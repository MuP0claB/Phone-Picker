import { NavLink } from "react-router-dom";
import Card from '../Card/Card';

import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <Card>
      <form className={styles.input}>
        <div>
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" placeholder="Enter your first name" />
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" placeholder="Enter your last name" />
        </div>
        <div>
          <label htmlFor="email">E-mail Address</label>
          <input type="email" id="email" placeholder="Enter your e-mail" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create your password"
          />
        </div>
        <div className={styles.btns}>
          <button className={styles.btn_register}>REGISTER</button>
          <NavLink className={styles.back_button} to="/welcome">
            BACK TO HOME
          </NavLink>
        </div>
      </form>
    </Card>
  );
};

export default RegistrationForm;
