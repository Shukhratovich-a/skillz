import { Link } from "react-router-dom";

import useNav from "../../Hooks/useNav";

import Logo from "../Lib/Icons/Logo";
import Basket from "../Lib/Icons/Basket";
import Burger from "../Lib/Icons/Burger";
import Close from "../Lib/Icons/Close";

import "./Nav.scss";

const Nav = () => {
  const screenWidth = window.innerWidth;
  const [isOpen, setIsOpen] = useNav();

  return (
    <nav className="nav">
      <div className="container">
        <Link className="nav__logo__link" to={"/"}>
          <Logo />
        </Link>

        <ul className={`nav__list ${isOpen ? "nav__list--open" : ""}`}>
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

        {screenWidth <= 768 ? (
          <button
            className={`nav__burger ${isOpen ? "nav__burger--open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? <Burger /> : <Close />}
          </button>
        ) : null}

        <button className="nav__button">
          <Basket />
          <span className="nav__button__count">0</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
