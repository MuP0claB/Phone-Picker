import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/cart">
          <ShoppingCart size={32}/>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;