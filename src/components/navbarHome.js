import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="/patient">patient</Link>
          </li>
          <li>
            <Link to="/emergency">emergency</Link>
          </li>
          <li>
            <Link to="/reportsAndBills">reportsAndBills</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
