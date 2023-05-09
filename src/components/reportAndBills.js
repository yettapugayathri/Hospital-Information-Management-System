import React from "react";
import "../App.css";
const ReportsAndBills = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h1>PATIENT REPORT</h1>
      <form action="">
        <label htmlFor="PatientID">PatientID: </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input id="PatientID" name="PatientID" type="number" />
        <br></br>
        <label htmlFor="PatientName">PatientName: </label>
        &nbsp;
        <input id="PatientName" name="PatientName" type="text" />
        <br></br>
        <label htmlFor="DoctorID">DoctorID: </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input id="DoctorID" name="DoctorID" type="number" />
        <br></br>
        <label htmlFor="DoctorName">DoctorName: </label>
        &nbsp;
        <input id="DoctorName" name="DoctorName" type="text" />
        <br></br>
        <label htmlFor="DateOfAdmit">DateofAdmit: </label>
        &nbsp;
        <input id="DateOfAdmit" name="DateOfAdmit" type="date" />
        <br></br>
        <label htmlFor="RelieveDate">RelieveDate: </label>
        &nbsp;&nbsp;&nbsp;  
        <input id="RelieveDate" name="RelieveDate" type="date" />
        <br></br>
        <label htmlFor="Room">Room: </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input id="Room" name="Room" type="text" />
        <br></br>
        <label htmlFor="Payment"> Payment: </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input id="Payment" name="Payment" type="text" />
        <label htmlFor="Medicine">
          <h4></h4>Medicine:{" "}
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          id="Medicine"
          name="Medicine"
          type="text"
          style={{ height: "100px", width: "300px" }}
        />
        <br></br>
        <br></br>
        <label htmlFor="Description">Description: </label>
        &nbsp;&nbsp;&nbsp;
        <input
          id="Description"
          name="Description"
          type="text"
          style={{ height: "150px", width: "300px" }}
        />
        </form>
        </header>
    </div>
  );
};
export default ReportsAndBills;
