import ContactHeader from "./components/ContactHeader/ContactHeader";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Offer from "./components/Offer/Offer";

const App: React.FC = () => {
  return (
    <>
      <ContactHeader />
      <Header />
      <Offer />
      <Footer />
    </>
  );
};

export default App;
