import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Header.scss";
import "../../components/Button/Button";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            to="/"
            className="mobile-menu__link"
            activeclassname="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="mobile-menu__link"
            activeclassname="active"
          >
            About us
          </NavLink>
          <NavLink
            to="/contact"
            className="mobile-menu__link"
            activeclassname="active"
          >
            Contact
          </NavLink>
          <Link to="/menu" className="button button--primary mobile-menu__btn">
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
          <Link to="/">
            <img
              className="header__logo"
              src="assets/image/logo.png"
              alt="Logo"
            />
          </Link>
          {isMobile ? (
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
                    to="/"
                    className="header__menu-link"
                    activeclassname="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="header__menu-link"
                    activeclassname="active"
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="header__menu-link"
                    activeclassname="active"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <Link to="/menu" className="button button--primary">
                Order online
              </Link>
              <Link to="/user" className="button button--ghost">
                <img src="assets/icon/user.svg" alt="user" />
              </Link>
            </nav>
          )}
          {mobileMenu}
        </div>
      </div>
    </header>
  );
};

export default Header;
