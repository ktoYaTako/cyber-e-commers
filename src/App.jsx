
import React from "react";
import Header from "./components/Header";
import './styles/styles.css'
import Footer from "./components/Footer";
import { Routes, Route, Link, Router, BrowserRouter } from 'react-router-dom'

import MainContent from "./Pages/MainContent";
import Catalog from "./Pages/Catalog";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} /> 
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact"  />
  <     Route path="/blog"  />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
