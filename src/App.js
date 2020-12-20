import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
