import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Events from "./components/pages/Events";
import Donate from "./components/pages/Donate";
import Contact from "./components/pages/Contact";
import PrayerGroup from "./components/pages/PrayerGroup"; // ✅ Import Prayer Group Page

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/events" component={Events} />
        <Route path="/donate" component={Donate} />
        <Route path="/contact" component={Contact} />
        <Route path="/prayer-group" component={PrayerGroup} /> {/* ✅ Add Prayer Group Route */}
      </Switch>
    </Router>
  );
}

export default App;
