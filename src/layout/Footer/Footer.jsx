import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <Link to="/">
            <img
              className="footer__logo"
              src="assets/image/logo-white.png"
              alt=""
            />
          </Link>
          <div className="footer__nav">
            <Link to="/" className="footer__nav-link">
              Home
            </Link>
            <Link to="/about" className="footer__nav-link">
              About us
            </Link>
            <Link to="/contact" className="footer__nav-link">
              Contact
            </Link>
            <Link to="/menu" className="footer__nav-link">
              Order online
            </Link>
          </div>
          <div className="footer__contact">
            <div className="footer__contact-item">
              <i className="bi bi-telephone footer__contact-item-icon"></i>
              <a
                href="tel:00000"
                className="footer__nav-link footer__contact-item-title"
              >
                +1 123123123
              </a>
            </div>
            <div className="footer__contact-item">
              <i className="bi bi-envelope footer__contact-item-icon"></i>
              <a
                href="mailto:contact@epi.com"
                className="footer__nav-link footer__contact-item-title"
              >
                contact@epi.com
              </a>
            </div>
          </div>
          <div className="footer__copyright">
            <i className="bi bi-c-circle footer__copyright-icon"></i>
            <p className="footer__copyright-title">
              Online Food Ordering System
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
