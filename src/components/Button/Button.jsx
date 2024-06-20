import "./Button.scss";

const Button = ({ children, className, theme, onClick, size }) => {
  return (
    <button
      className={`button ${className} button--${theme} button--${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
