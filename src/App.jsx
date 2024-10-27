import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Navbar/pages/Dashboard";
import Textbook from "./Components/Navbar/pages/Textbook";
import Module from "./Components/Navbar/pages/Module"; // Import the Module component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/textbook/:courseId" element={<Textbook />} />
        <Route path="/module/:sectionId" element={<Module />} /> {/* Add module route */}
      </Routes>
    </Router>
  );
};

export default App;
