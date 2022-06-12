import { Link } from "react-router-dom";

import Logo from "../Lib/Icons/Logo";
import Basket from "../Lib/Icons/Basket";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Link className="nav__logo__link" to={"/"}>
          <Logo />
        </Link>

        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#link" title="Courses">
              Courses
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#link" title="Free Workshops">
              Free Workshops
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#link" title="Blog">
              Blog
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#link" title="About">
              About
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#link" title="Contact">
              Contact
            </a>
          </li>
        </ul>

        <button className="nav__button">
          <Basket />
          <span className="nav__button__count">0</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
