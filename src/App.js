import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"; // ✅ Import HeroSection
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      
      {/* ✅ Add HeroSection Below Navbar */}
      <HeroSection /> 

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
