import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="container">
      <form className={styles['login-form']}>
        <div>
          <label htmlFor="email">E-mail Address</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.btn}>
          <NavLink to="/phones">LOGIN</NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;