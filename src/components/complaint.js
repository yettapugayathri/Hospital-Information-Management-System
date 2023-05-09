import React , { useState, useEffect } from "react";
import "../App.css"
import validation from "./valid_complaint";

function Complaint() {
  const [values, setValues] = useState({
    username: "",
    complaint: "",
  });

  const [errors, setError] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(validation(values));
    console.log(values);
  }

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.username !== "" &&
      values.complaint !== ""
    ) {
      alert("Complaint is registered");
    }
  }, [errors]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Register Complaint</h1>
        <form onSubmit={handleSubmit} action="">
          <div>
            <label htmlFor="username">Username</label>
            &nbsp;&nbsp;
            <input
              type="text"
              name="username"
              id="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="complaint">
              <b></b>
            </label>
            <label htmlFor="complaint">
              <h4>Complaint</h4>
            </label>
            <input
              type="text"
              name="complaint"
              id="complaint"
              style={{ width: "400px", height: "200px" }}
              value={values.complaint}
              onChange={handleChange}
            />
            {errors.complaint && <p>{errors.complaint}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}
export default Complaint;
