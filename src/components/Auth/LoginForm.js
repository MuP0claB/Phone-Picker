import Card from "../Card/Card";

import { useContext, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isReg, setIsReg] = useState();

  const switchHandler = () => {
    setIsReg((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredpassword = passwordInputRef.current.value;
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1>{isReg ? "LOGIN" : "SIGN UP"}</h1>
        <div>
          <label htmlFor="email">Your E-mail</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={styles.btn}>
          <button type="submit">CREATE ACCOUNT</button>
          <button type="button" className={styles.toggle}>
            {isReg ? "LOGIN WITH EXISTING ACCOUNT" : "REGISTER"}
          </button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
