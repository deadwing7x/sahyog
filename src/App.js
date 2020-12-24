import "./App.css";
import WhoAreWe from "./components/WhoAreWe";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Header />
          <Route path="/about-us" component={AboutUs}>
            <AboutUs />
          </Route>
          <Route exact path="/">
            <MainContent />
            <WhoAreWe />
            <ContactUs />
          </Route>
          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
