import Button from "../Button/Button";
import "./Product.scss";

const Product = ({ product, addToCart, items }) => {
  const itemInCart = items.find((item) => item.name === product.name);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <div key={product.name} className="product">
      <img src={product.image} alt={product.name} className="product__img" />
      <div className="product__details">
        <div className="product__top">
          <p className="product__name">{product.name}</p>
          {product.tags && (
            <div className="product__tags">
              {product.tags.map((tag) => (
                <span key={tag} className={`product__tag ${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="product__bottom">
          <p className="product__price">${product.price.toFixed(2)}</p>
          <Button
            className="button--primary product__btn"
            onClick={() => addToCart(product)}
          >
            Order
            {quantity > 0 && <div className="product__btn-quantity">{quantity}</div>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
