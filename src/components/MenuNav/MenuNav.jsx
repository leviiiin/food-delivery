import { useState, useEffect } from "react";
import "./MenuNav.scss";

const MenuNav = ({ products }) => {
  const [active, setActive] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleButtonClick = (event, product) => {
    setActive(product);
    const targetElement = document.getElementById(product);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const nav = document.querySelector(".menu-nav");
    const navOffsetTop = nav.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > navOffsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      let currentActive = null;
      products.forEach((product) => {
        const section = document.getElementById(product);
        const sectionTop = section.offsetTop - nav.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentActive = product;
        }
      });
      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [products]);

  return (
    <div className={`menu-nav ${isSticky ? "sticky" : ""}`}>
      {products.map((product) => (
        <button
          key={product}
          className={`menu-nav__btn ${active === product ? "active" : ""}`}
          data-target={product}
          onClick={(event) => handleButtonClick(event, product)}
        >
          {product}
        </button>
      ))}
    </div>
  );
};

export default MenuNav;
