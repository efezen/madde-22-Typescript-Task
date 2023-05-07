import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tiyatro from "./pages/Tiyatro";
import Konser from "./pages/Konser";
import StandUp from "./pages/StandUp";
import Sinema from "./pages/Sinema";
import Cocuk from "./pages/Cocuk";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiyatro" element={<Tiyatro />} />
          <Route path="/konser" element={<Konser />} />
          <Route path="/standup" element={<StandUp />} />
          <Route path="/sinema" element={<Sinema />} />
          <Route path="/cocuk" element={<Cocuk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
