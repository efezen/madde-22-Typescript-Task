import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TumEtkinlikler from "./pages/TumEtkinlikler";
import Tiyatro from "./pages/Tiyatro";
import Konser from "./pages/Konser";
import StandUp from "./pages/StandUp";
import Sinema from "./pages/Sinema";
import Cocuk from "./pages/Cocuk";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<TumEtkinlikler />} />
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
