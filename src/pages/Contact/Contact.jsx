import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__content">
            <i className="bi bi-mailbox-flag contact-hero__icon"></i>
            <h4 className="h4 contact-hero__title">Contact us</h4>
            <p className="h2 contact-hero__text">
              ORDER A DELICIOUS PIZZA WITH DELIVERY IN LESS THAN HALF AN HOUR.
            </p>
            <a href="tel:0000" className="h3 contact-hero__phone">
              +48 33 8376 6284
            </a>
          </div>
        </div>
      </section>
      {/* MAP */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-info__content">
            <p className="contact-info__address">
              Forstgasse 7, 37269 Eschwege, Deutschland
            </p>
            <p className="contact-info__time">Everyday 7AM - 11PM</p>
            <div className="contact-info__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.6930968534516!2d10.051421777049033!3d51.1878792717424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4b9987542bc89%3A0xf94adc21ebddbffb!2sExpress%20Pizza%20Italia!5e0!3m2!1sru!2sua!4v1718860612192!5m2!1sru!2sua"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contact-info__map-item"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
