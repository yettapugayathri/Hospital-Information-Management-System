import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1> OLIVA Hospitals </h1>
          <Link to="/Login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/Complaint">Complaint</Link>
          <Link to="/Dashboard">Dashboard</Link>
          <Link to="/Emergency">Emergency</Link>
          <Link to="/Patient">Patient</Link>
          <Link to="/reportAndBills">ReportsAndBills</Link>
        </header>
      </div>
    );
};

export default Home;