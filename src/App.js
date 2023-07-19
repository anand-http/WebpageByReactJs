import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
// import About from "./About/About";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
// import Brands from "./Brands/Brands";
import Footer from './Footer/Footer';
import './mediaQuery.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/#about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/brands" element={<Brands />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
