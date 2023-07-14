import { useContext } from "react";
import { NavLink } from "react-router-dom";
import finder_logo from "../../../assets/Phone-Finder.png";

import styles from "./Header.module.css";
import AuthContext from "../../../store/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);

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
              {authCtx.isLoggedIn && (
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
              )}
              {authCtx.isLoggedIn && (
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
              )}
              {!authCtx.isLoggedIn && (
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? styles.active : ""
                    }
                    to="/login"
                  >
                    LOG IN
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
