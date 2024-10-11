import "./About.scss";
import "../../components/Button/Button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <h1
              className="h1 about-hero__title"
              data-aos="zoom-in"
              data-aos-duration="700"
            >
              About us
            </h1>
            <h2
              className="h2 about-hero__text"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              THE BEST PIZZAS IN THE CITY
            </h2>
          </div>
        </div>
      </section>
      {/* INFO */}
      <section className="about-info">
        <div className="container">
          <div className="about-info__content">
            <div
              className="about-info__item"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="h3 about-info__item-title">Thin crust dough</h3>
              <p className="about-info__item-text">
                The dough of an Italian pizza should be thin, and the edges
                should be fluffy in the middle and crispy on the outside.
              </p>
            </div>
            <img
              className="about-info__img"
              src="assets/image/about/pizza-hand.jpg"
              alt="img"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <div
              className="about-info__item"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="h3 about-info__item-title">Excellent toppings</h3>
              <p className="about-info__item-text">
                The ingredients determine the pizza taste — you will find only
                the best seasonal ingredients at our place.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Order */}
      <section className="about-order">
        <div className="about-order__glass-bg">
          <div className="container">
            <div className="about-order__content">
              <p
                className="h1 about-order__title"
                data-aos="zoom-in"
                data-aos-duration="600"
              >
                Discover what authentic pizza tastes like
              </p>
              <div data-aos="fade-up" data-aos-duration="900">
                <Link
                  to="/food-delivery/menu"
                  className="button button--big button--ghost-orange"
                >
                  Order online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Welcome */}
      <section className="about-welcome">
        <div className="container">
          <div className="about-welcome__content">
            <div
              className="about-welcome__info"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <h2 className="h2 about-welcome__title">
                Welcome to sunny Italy!
              </h2>
              <p className="about-welcome__text">
                If you choose our Italian pizzeria, you certainly won`t regret
                it. We make our pizzas with the highest quality products,
                imported straight from Italy.
              </p>
              <p className="about-welcome__text">
                We invite you on a journey to sunny Italy. Our adventure with
                pizza began during one of our family trips. We fell in love with
                regional flavors and have longed for them every day ever since.
                By creating EXPRESS PIZZA ITALY we want you to have a similar
                experience.
              </p>
              <Link
                to="/food-delivery/menu"
                className="button button--big button--primary"
              >
                Order with delivery
              </Link>
            </div>
            <img
              className="about-welcome__img"
              src="assets/image/about/welcom-img.png"
              alt="img"
              data-aos="zoom-in"
              data-aos-duration="700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
