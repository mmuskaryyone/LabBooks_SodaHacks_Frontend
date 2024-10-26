// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Navbar/pages/Dashboard";
import Textbook from "./Components/Navbar/pages/Textbook";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/textbook/:courseId" element={<Textbook />} />
      </Routes>
    </Router>
  );
};

export default App;