import React from "react";
import "../App.css";
const Patient = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h1>ADMIT PATIENT</h1>
      <p>The patient must have had an appointment before being admitted.</p>
      <form action="">
        <label htmlFor="PatientID"> PatientID: </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input id="PatientID" name="PatientID" type="number" />
        <br></br>
        <label htmlFor="DateOfAdmit"> DateofAdmit: </label>
        &nbsp;
        <input id="DateOfAdmit" name="DateOfAdmit" type="date" />
        <br></br>
        <label htmlFor="Roomtype"> Roomtype: </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input id="Roomtype" name="Roomtype" type="text" />
        <br></br>
        <label htmlFor="Room"> Room: </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input id="Room" name="Room" type="text" />
        <br></br>
        <label htmlFor="Payment"> Payment: </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input id="Payment" name="Payment" type="text" />
        <br></br>
        <br></br>
        <button type="submit">Admit</button>
        </form>
        </header>
    </div>
  );
};

export default Patient;
