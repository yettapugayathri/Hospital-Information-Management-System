import React from "react";
import "../App.css";

const patient_data = [
  { PatientID: 1, PatientName: "Hari", PatientContact: 1234567890, DateOfAppointment: "12/02/2023", Problem: "accident", DoctorID: 1001, DoctorName: "Decl" },
]

const Emergency = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "red" }}>Emergency</h1>
        <div>
          <form action="">
            <label htmlFor="name">Name:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="name" id="name" />
            <br></br>
            <label htmlFor="contact">Contact:</label>
            &nbsp;&nbsp;&nbsp;
            <input type="number" name="contact" id="contact" />
            <br></br>
            <label htmlFor="age">Age:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="number" name="age" id="age" />
            <br></br>
            <label htmlFor="problem">Problem:</label>
            &nbsp;&nbsp;
            <input type="text" name="problem" id="problem" />
            <br></br>
            <label htmlFor="date">Date:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="date" name="date" id="date" />
            <br></br>
            <br></br>
            <button type="submit">Admit</button>
          </form>
        </div>
        <div>
          <h2>List of Emergency Patients</h2>
          <table>
            <tr>
              <th>PatientID</th>
              <th>PatientName</th>
              <th>PatientContact</th>
              <th>DateOfAppointment</th>
              <th>Problem</th>
              <th>DoctorID</th>
              <th>DoctorName</th>
            </tr>
            {patient_data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.PatientID}</td>
                  <td>{val.PatientName}</td>
                  <td>{val.PatientContact}</td>
                  <td>{val.DateOfAppointment}</td>
                  <td>{val.Problem}</td>
                  <td>{val.DoctorID}</td>
                  <td>{val.DoctorName}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </header>
    </div>
  );
};
export default Emergency;
