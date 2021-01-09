import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Header />
          <Route path="/about-us" component={AboutUs}>
            <AboutUs />
          </Route>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/campaign-gallery" component={Gallery}>
            <Gallery />
          </Route>
          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
