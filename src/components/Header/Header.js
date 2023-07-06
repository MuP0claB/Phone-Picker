import { NavLink } from "react-router-dom";
import finder_logo from "../../articles/Phone-Finder.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header__content"]}>
          <div className={styles.logo}>
            <NavLink to="/welcome">
              <img src={finder_logo} alt="Not Available" />
            </NavLink>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? styles.active : ""
                  }
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? styles.active : ""
                  }
                  to="/phones"
                >
                  PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? styles.active : ""
                  }
                  to="/registration"
                >
                  SIGN IN
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
