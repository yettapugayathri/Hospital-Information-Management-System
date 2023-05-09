import React from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbarHome";
import Dashboard from "../components/dashboard";
import Emergency from "../components/emergency";
import Patient from "../components/patient";
import ReportsAndBills from "../components/reportAndBills";
function Nav() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/reportAndBills" element={<ReportsAndBills />} />
      </Routes>
    </Router>
  );
}

export default Nav;
