import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/cart">
          <ShoppingCart size={32} />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
