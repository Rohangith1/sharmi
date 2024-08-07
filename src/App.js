import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-slate-800 to-pink-500 min-h-screen font-Syne">
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
