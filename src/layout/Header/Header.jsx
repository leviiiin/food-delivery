import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import useScreen from "../../hooks/useScreen";
import "./Header.scss";
import "../../components/Button/Button";

const Header = () => {
  const deviceType = useScreen();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mobileMenu = (
    <>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu__list">
          <NavLink
            to="/food-delivery/"
            className="mobile-menu__link"
            activeclassname="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/food-delivery/about"
            className="mobile-menu__link"
            activeclassname="active"
          >
            About us
          </NavLink>
          <NavLink
            to="/food-delivery/contact"
            className="mobile-menu__link"
            activeclassname="active"
          >
            Contact
          </NavLink>
          <Link
            to="/food-delivery/menu"
            className="button button--primary mobile-menu__btn"
          >
            Order online
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/food-delivery/">
            <img
              className="header__logo"
              src="assets/image/logo.png"
              alt="Logo"
            />
          </Link>
          {deviceType === "mobile" ? (
            <div className="header__mobile-nav">
              <button
                className="button button--ghost header__humburger"
                onClick={toggleMenu}
              >
                <i
                  className={`bi ${
                    isMenuOpen ? "bi-x-lg" : "bi-list"
                  } header__humburger-icon`}
                ></i>
              </button>
            </div>
          ) : (
            <nav className="header__nav">
              <ul className="header__menu">
                <li>
                  <NavLink
                    to="/food-delivery/"
                    className="header__menu-link"
                    activeclassname="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/food-delivery/about"
                    className="header__menu-link"
                    activeclassname="active"
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/food-delivery/contact"
                    className="header__menu-link"
                    activeclassname="active"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <Link to="/food-delivery/menu" className="button button--primary">
                Order online
              </Link>
              <Link to="/food-delivery/user" className="button button--ghost">
                <img src="assets/icon/user.svg" alt="user" />
              </Link>
            </nav>
          )}
          {deviceType === "mobile" && mobileMenu}
        </div>
      </div>
    </header>
  );
};

export default Header;
