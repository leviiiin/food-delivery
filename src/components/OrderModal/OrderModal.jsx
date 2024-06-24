import { useState } from "react";
import "./OrderModal.scss";

const OrderModal = ({ cartItems, total, onClose, clearCart }) => {
  const [formData, setFormData] = useState({
    paymentMethod: "",
    orderType: "",
    when: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    deliveryDateTime: "",
    comments: "",
  });

  const [showAddressPanel, setShowAddressPanel] = useState(false);
  const [showDateTimePanel, setShowDateTimePanel] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    address: false,
    deliveryDateTime: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "orderType") {
      setShowAddressPanel(value === "delivery");
    }
    if (name === "when") {
      setShowDateTimePanel(value === "specific");
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, address: value }));
  };

  const handleDateTimeChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, deliveryDateTime: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["firstName", "lastName", "phone", "email"];
    const newErrors = {};
    let hasError = false;
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
        hasError = true;
      } else {
        newErrors[field] = false;
      }
    });

    setErrors(newErrors);

    if (hasError) {
      return;
    }

    const orderId = generateOrderId(); 
    console.log("Order submitted", formData, cartItems, total);

    setOrderSubmitted(true);
    setOrderId(orderId);
    clearCart(); 

    setFormData({
      paymentMethod: "",
      orderType: "",
      when: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      deliveryDateTime: "",
      comments: "",
    });
  };

  const generateOrderId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  return (
    <div className="order-modal">
      <div className="order-modal__content">
        {!orderSubmitted ? (
          <>
            <button className="order-modal__close" onClick={onClose}>
              &times;
            </button>
            <form onSubmit={handleSubmit}>
              <div className="order-modal__section">
                <h2 className="order-modal__section-title">Payment</h2>
                <div className="order-modal__options">
                  <label
                    className={`order-modal__option ${
                      formData.paymentMethod === "card" ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                    />
                    Credit/Debit Card On Delivery
                  </label>
                  <label
                    className={`order-modal__option ${
                      formData.paymentMethod === "cash" ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleInputChange}
                    />
                    Cash
                  </label>
                </div>
              </div>

              <div className="order-modal__section">
                <h2 className="order-modal__section-title">Order type</h2>
                <div className="order-modal__options">
                  <label
                    className={`order-modal__option ${
                      formData.orderType === "delivery" ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="orderType"
                      value="delivery"
                      checked={formData.orderType === "delivery"}
                      onChange={handleInputChange}
                    />
                    Delivery
                  </label>
                  <label
                    className={`order-modal__option ${
                      formData.orderType === "pickup" ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="orderType"
                      value="pickup"
                      checked={formData.orderType === "pickup"}
                      onChange={handleInputChange}
                    />
                    Pickup
                  </label>
                </div>
                {showAddressPanel && (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleAddressChange}
                    className={
                      errors.address
                        ? "order-modal__input error"
                        : "order-modal__input"
                    }
                    placeholder="Enter your address"
                    required={showAddressPanel}
                  />
                )}
                {errors.address && (
                  <p className="error-text">Please enter your address.</p>
                )}
              </div>

              <div className="order-modal__section">
                <h2 className="order-modal__section-title">When</h2>
                <div className="order-modal__options">
                  <label
                    className={`order-modal__option ${
                      formData.when === "asap" ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="when"
                      value="asap"
                      checked={formData.when === "asap"}
                      onChange={handleInputChange}
                    />
                    As soon as possible
                  </label>
                  <label
                    className={`order-modal__option ${
                      formData.when === "specific" ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="when"
                      value="specific"
                      checked={formData.when === "specific"}
                      onChange={handleInputChange}
                    />
                    Specific time
                  </label>
                </div>
                {showDateTimePanel && (
                  <input
                    type="datetime-local"
                    name="deliveryDateTime"
                    value={formData.deliveryDateTime}
                    onChange={handleDateTimeChange}
                    className={
                      errors.deliveryDateTime
                        ? "order-modal__input error"
                        : "order-modal__input"
                    }
                    required={showDateTimePanel}
                  />
                )}
                {errors.deliveryDateTime && (
                  <p className="error-text">
                    Please select a delivery date and time.
                  </p>
                )}
              </div>

              <div className="order-modal__section">
                <h2 className="order-modal__section-title">Contact</h2>
                <label className="order-modal__label">
                  First name *
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={
                      errors.firstName
                        ? "order-modal__input error"
                        : "order-modal__input"
                    }
                  />
                  {errors.firstName && (
                    <p className="error-text">Please enter your first name.</p>
                  )}
                </label>
                <label className="order-modal__label">
                  Last name *
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={
                      errors.lastName
                        ? "order-modal__input error"
                        : "order-modal__input"
                    }
                  />
                  {errors.lastName && (
                    <p className="error-text">Please enter your last name.</p>
                  )}
                </label>
                <label className="order-modal__label">
                  Phone *
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={
                      errors.phone
                        ? "order-modal__input error"
                        : "order-modal__input"
                    }
                  />
                  {errors.phone && (
                    <p className="error-text">
                      Please enter your phone number.
                    </p>
                  )}
                </label>
                <label className="order-modal__label">
                  Email *
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={
                      errors.email
                        ? "order-modal__input error"
                        : "order-modal__input"
                    }
                  />
                  {errors.email && (
                    <p className="error-text">
                      Please enter a valid email address.
                    </p>
                  )}
                </label>
              </div>

              <div className="order-modal__section order-modal__order-summary">
                <h2 className="order-modal__section-title">Your order</h2>
                <ul className="order-modal__order-list">
                  {cartItems.map((item) => (
                    <li key={item.name} className="order-modal__order-item">
                      <span className="order-modal__item-name">
                        {item.quantity} x {item.name}
                      </span>
                      <span className="order-modal__item-price">
                        &#10240; ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="order-modal__total">Total: ${total.toFixed(2)}</p>
              </div>

              <button
                type="submit"
                className="button--primary order-modal__submit"
              >
                Create order
              </button>
            </form>
          </>
        ) : (
          <div className="success-panel">
            <button className="success-panel__close" onClick={onClose}>&times;</button>
            <h2 className="success-panel__title">Order successfully placed!</h2>
            <p className="success-panel__orderId">
              Your order id is: <mark className="success-panel__orderId-mark">{orderId}</mark>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;
