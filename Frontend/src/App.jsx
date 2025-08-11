
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/navbar";
import MainPage from "./Components/Home/main";

// New pages
import ContactUs from "./Components/ContactUs/main";
import ApplyUs from "./Components/Apply/main";
import Hire from "./Components/Hire/main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar stays across all pages */}
        <Navbar />

        {/* Page routing */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/apply" element={<ApplyUs />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
