import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Offer from "./components/Offer/Offer";
import Trusted from "./components/Trusted/Trusted";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ContactHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Offer />} />
          <Route path="/trusted" element={<Trusted />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
