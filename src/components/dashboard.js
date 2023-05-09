import React from "react";
import "../App.css";
import '../components/dashboard_style.css';

const data = [
  { EmployeeID: 1000, Name: "Amit", Position: "Manager", Contact: 1234567891, Email: "Amit@gmail.com" },
  { EmployeeID: 1001, Name: "Recl", Position: "Receptionist", Contact: 1234567892, Email: "Recl@gmail.com" },
  { EmployeeID: 1002, Name: "Decl", Position: "Nurse", Contact: 1234567893, Email: "Decl@gmail.com" },
]

const doctor_data = [
  { DoctorID: 1000, Name: "Amit", Type: "Physician", Contact: 1234567891, Email: "Amit@gmail.com", Appointments: "2" },
  { DoctorID: 1001, Name: "Decl", Type: "Surgeon", Contact: 1234567893,  Email: "Decl@gmail.com", Appointments: "4" },
]

const Dashboard = () => {
  return (
    <div className="App">
      <header className="App-header">
    <div className="dashboard_style">
      <h1>Receptionist / My Dashboard</h1>
      <h2>Hospital Staff</h2>
      <table>
        <tr>
          <th>EmployeeID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Contact</th>
          <th>Email</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.EmployeeID}</td>
              <td>{val.Name}</td>
              <td>{val.Position}</td>
              <td>{val.Contact}</td>
              <td>{val.Email}</td>
            </tr>
          );
        })}
      </table>

      <h2>Hospital Doctor</h2>
      <table>
        <tr>
          <th>DoctorID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Appointments</th>
        </tr>
        {doctor_data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.DoctorID}</td>
              <td>{val.Name}</td>
              <td>{val.Type}</td>
              <td>{val.Contact}</td>
              <td>{val.Email}</td>
              <td>{val.Appointments}</td>
            </tr>
          );
        })}
          </table>
          </div>
     </header>
    </div>
  );
};
export default Dashboard;
