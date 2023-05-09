import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/components/login";
import Register from "../src/components/register";
import Home from "../src/components/home";
import Complaint from "../src/components/complaint";
import Dashboard from "./components/dashboard";
import Emergency from "./components/emergency";
import Patient from "./components/patient";
import ReportsAndBills from "./components/reportAndBills";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Emergency" element={<Emergency />} />
        <Route path="/Patient" element={<Patient />} />
        <Route path="/reportAndBills" element={<ReportsAndBills />} />
      </Routes>
    </Router>
  );
}

export default App;
