import "./base/index.scss";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Menu } from "./pages/index";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

Aos.init({
  once: true,
});

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <Routes>
          <Route path="/food-delivery/" element={<Home />} />
          <Route path="/food-delivery/about" element={<About />} />
          <Route path="/food-delivery/contact" element={<Contact />} />
          <Route path="/food-delivery/menu" element={<Menu />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
