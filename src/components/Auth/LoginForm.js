import { useContext, useState } from "react";
import Card from "../Card/Card";
import AuthContext from "../../store/auth-context";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authCtx = useContext(AuthContext);

  const [isReg, setIsReg] = useState(false);

  const createAccHandler = (event) => {
    event.preventDefault();
    
    localStorage.setItem("email", email);
    localStorage.setItem("pass", password);

    const emailToken = localStorage.getItem("email");
    const passToken = localStorage.getItem("pass");

    console.log(emailToken, passToken);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passHandler = (e) => {
     setPassword(e.target.value);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={createAccHandler}>
        <h1>{isReg ? "LOGIN" : "SIGN UP"}</h1>
        <div>
          <label htmlFor="email">
            {isReg ? "Your E-mail" : "Enter E-mail"}
          </label>
          <input type="email" id="email" onChange={emailHandler} />
        </div>
        <div>
          <label htmlFor="password">
            {isReg ? "Your Password" : "Enter Password"}
          </label>
          <input
            type="password"
            id="password"
            onChange={passHandler}
          />
        </div>
        <div className={styles.btn}>
          <button type="submit">{isReg ? "LOGIN" : "REGISTER"}</button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
