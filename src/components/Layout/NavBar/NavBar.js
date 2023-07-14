import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return <div className={styles.navbar}>
    <div className={styles.links}>
      <NavLink>Shop</NavLink>
      <NavLink></NavLink>
    </div>
  </div>;
};

export default NavBar;