import { useEffect, useState } from "react";
import { Cart, Product, OrderModal } from "../../components/index";
import MenuNav from "../../components/MenuNav/MenuNav";
import "./Menu.scss";
import productsData from "../../data/products.json";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".menu-nav");
    const navOffsetTop = nav.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > navOffsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    setCategories(productsData.categories);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productName) => {
    setCartItems((prevItems) =>
      prevItems.reduce((acc, item) => {
        if (item.name === productName) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="menu-page">
      {/* HERO */}
      <section className="menu-hero">
        <div className="container">
          <div className="menu-hero__content">
            <h1 className="h1 menu-hero__title">Our menu</h1>
            <h2 className="h2 menu-hero__text">
              SEE OUR OFFER WITH DELIVERY TO YOUR DOOR
            </h2>
          </div>
        </div>
      </section>
      {/* MENU */}
      <section className="menu">
        <div className="container">
          <div className="menu__content">
            <div className="menu__left">
              <MenuNav products={categories.map((category) => category.name)} />
              {categories.map((category) => (
                <div
                  className="menu__products-section"
                  key={category.name}
                  id={category.name}
                >
                  <p className="menu__products-title">{category.name}</p>
                  <div className="menu__products-list">
                    {category.products.map((product) => (
                      <Product
                        items={cartItems}
                        key={product.name}
                        product={product}
                        addToCart={addToCart}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <aside className={`menu__aside ${isSticky ? "sticky" : ""}`}>
              <Cart
                items={cartItems}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                total={calculateTotal()}
                onCheckout={handleCheckout}
              />
            </aside>
          </div>
        </div>
        <button className="scroll-to-cart" onClick={handleCheckout}>
          Go to Cart
        </button>
      </section>
      {isOrderModalOpen && (
        <OrderModal
          cartItems={cartItems}
          total={calculateTotal()}
          onClose={handleCloseOrderModal}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Menu;
