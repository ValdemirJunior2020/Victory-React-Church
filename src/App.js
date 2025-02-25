import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // ✅ Keep Switch for React Router v5
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Events from "./components/pages/Events";
import Donate from "./components/pages/Donate";
import Contact from "./components/pages/Contact";
import PrayerGroup from "./components/pages/PrayerGroup";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch> {/* ✅ Use Switch (v5 syntax) */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/events" component={Events} />
        <Route path="/donate" component={Donate} />
        <Route path="/contact" component={Contact} />
        <Route path="/prayer-group" component={PrayerGroup} />
      </Switch>
    </Router>
  );
}

export default App;
