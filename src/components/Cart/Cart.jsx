import Button from "../Button/Button";
import "./Cart.scss";

const Cart = ({ items, addToCart, removeFromCart, total, onCheckout }) => {
  return (
    <div className="cart">
      <p className="cart__title">Your order</p>
      <div className="cart__order">
        {items.length === 0 ? (
          <div className="cart__empty">
            <i className="bi bi-cart3 cart__empty-icon"></i>
            <p className="cart__empty-text">Cart is empty.</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.name} className="cart__item">
              <p className="cart__item-name">
                {item.quantity} x {item.name}
              </p>
              <div className="cart__item-counter">
                <p className="cart__item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <Button
                  className="cart__item-btn"
                  onClick={() => removeFromCart(item.name)}
                >
                  -
                </Button>
                <Button
                  className="cart__item-btn"
                  onClick={() => addToCart(item)}
                >
                  +
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
      {items.length > 0 && (
        <div className="cart__total">
          <div className="cart__total-price">
            <p className="cart__total-price-item">Total</p>
            <p className="cart__total-price-item">${total.toFixed(2)}</p>
          </div>
          <Button
            className="button button--primary cart__btn"
            onClick={onCheckout}
          >
            Go to checkout
            <i className="bi bi-arrow-right-short cart__btn-icon"></i>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
