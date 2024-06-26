import "./base/index.scss";
import "./scripts/aos";
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Menu } from "./pages/index";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
