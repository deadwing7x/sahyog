import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Gallery from "./components/Gallery";

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
