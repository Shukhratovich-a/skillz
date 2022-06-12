import { Link } from "react-router-dom";

import Logo from "../Lib/Icons/Logo";
import Basket from "../Lib/Icons/Basket";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Link to={"/"}>
          <Logo />
        </Link>

        <button className="nav__button">
          <Basket />
          <span className="nav__button__count">0</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
