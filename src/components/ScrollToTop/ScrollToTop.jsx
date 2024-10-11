import useScroll from "../../hooks/useScroll";
import "./ScrollToTop.scss";

const ScrollToTopButton = () => {
  const isVisible = useScroll();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <i className="bi bi-arrow-up scroll-to-top__icon"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
