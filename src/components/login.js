import React, { useEffect, useState } from "react";
import "../App.css";
import validation from "./valid_login";
import { useNavigate } from "react-router-dom";
import axios from "axios"
function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setError] = useState({});
  const navigate = useNavigate()
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/login", {username:values.username,password: values.password})

    if (res.data.includes("Success")) {
      navigate("/Dashboard")
    } else {
      console.log(res.data)
    }

  }

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.username !== "" &&
      values.password !== ""
    ) {
      alert("Form Submitted");
    }
  }, [errors]);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} action="">
          <h1>Login</h1>
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
            <label htmlFor="password">Password</label>
            &nbsp;&nbsp;&nbsp;
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <br></br>
          <button type="submit">
            Login
          </button>
        </form>
      </header>
    </div>
  );
}
export default Login;
