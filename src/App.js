import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from "./pages/About";
import Contact from "./pages/Contact";
import Porfolio from "./pages/Portfolio";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./assets/css/form.css";
import "./assets/css/gallery.css";
import "./assets/css/style.css";
import './App.css';

function App() {
  return (<Router>
    <Header />
    <Route exact path="/" component={About} />
    <Route exact path="/portolio" component={Porfolio} />
    <Route exact path="/contact" component={Contact} />
    <Footer />
  </Router>
  );
}

export default App;
