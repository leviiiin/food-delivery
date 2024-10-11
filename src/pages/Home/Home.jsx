import "./Home.scss";
import "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-page">
      {/* HERO */}
      <section className="h-hero">
        <div className="container">
          <div className="h-hero__content">
            <h1
              className="h1 h-hero__title"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Authentic Italian pizza!
            </h1>
            <p
              className="h4 h-hero__text"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              Delicious Italian pizza straight from the oven — with delivery to
              your door!
            </p>
            <div data-aos="fade-up-left" data-aos-duration="1100">
              <Link
                to="/food-delivery/menu"
                className="button button--ghost-red button--big"
              >
                Order online
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="h-about">
        <div className="container">
          <section
            className="h-about__content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="h-about__images">
              <img
                className="h-about__img"
                src="assets/image/home/about-1.jpg"
                alt="Image"
              />
              <img
                className="h-about__img"
                src="assets/image/home/about-2.jpg"
                alt="Image"
              />
            </div>
            <div className="h-about__info">
              <h2 className="h2 h-about__title">
                Enjoy the original Italian pizza
              </h2>
              <p className="h-about__text">
                Italians say that the secret to good pizza is carefully selected
                ingredients of the best quality. They say there should be no
                more than 3 of them! And all this on extremely thin crust dough.
                Do you agree? Come to EXPRESS PIZZA ITALY and see for yourself.
              </p>
            </div>
          </section>
        </div>
      </section>
      {/* INGREDIENTS */}
      <section className="h-ingredients">
        <div className="container">
          <div className="h-ingredients__content">
            <div
              className="h-ingredients__info"
              data-aos="fade-right"
              data-aos-duration="1400"
            >
              <h2 className="h2 h-ingredients__title">
                Only the best ingredients
              </h2>
              <p className="h-ingredients__text">
                We use only natural ingredients to prepare our pizzas, most of
                which we import from Italy. Italian burrata, spices, olive oil?
                These and many other additives determine the taste of our
                products.
              </p>
              <Link
                to="/food-delivery/menu"
                className="button button--ghost-white button--big"
              >
                Order online
              </Link>
            </div>
            <img
              className="h-ingredients__img"
              src="assets/image/home/pizza-img.png"
              alt="Image"
              data-aos="fade-left"
              data-aos-duration="900"
            />
          </div>
        </div>
      </section>
      {/* INVITE */}
      <section className="h-invite">
        <div className="container">
          <div className="h-invite__content">
            <h2
              className="h2 h-invite__title"
              data-aos="zoom-in"
              data-aos-duration="1100"
            >
              We invite you to EXPRESS PIZZA ITALY!
            </h2>
          </div>
        </div>
      </section>
      {/*  */}
    </div>
  );
};

export default Home;
