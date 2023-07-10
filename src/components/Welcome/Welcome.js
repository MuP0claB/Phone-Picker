import { NavLink } from "react-router-dom";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.box}>
      <p>WANNA TAKE A LOOK AT OUR GREAT OFFERS ?</p>
      <NavLink to="/login" className={styles.nav_register}>
        REGISTER HERE 👇🏽
      </NavLink>
    </div>
  );
};

export default Welcome;
