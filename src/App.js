import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
