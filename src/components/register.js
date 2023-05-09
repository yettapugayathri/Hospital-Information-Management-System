import React, { useState, setState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../App.css";
import axios from "axios";
function Register() {
  // const history = useHistory();
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    contact: "",
    email: "",
    ID: "",
    position: "",
    age: "",
    bloodGroup: "",
    password: "",
    confirmpassword: "",
  });
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.id;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {
      fullname,
      username,
      contact,
      email,
      ID,
      position,
      age,
      bloodGroup,
      password,
      confirmpassword,
    } = user;

    const res = await axios.post("http://localhost:5000/register",{
        fullname,
        username,
        contact,
        email,
        ID,
        position,
        age,
        bloodGroup,
        password,
        confirmpassword,
      })

    const data = await res.data;

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form method="POST">
          <h1>Register</h1>
          <div>
            <label htmlFor="fullname">Fullname</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={user.fullname}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label htmlFor="username">Username </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label htmlFor="contact">Contact</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="number"
              name="contact"
              id="contact"
              value={user.contact}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label htmlFor="ID">ID</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="number"
              name="ID"
              id="ID"
              value={user.ID}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label htmlFor="position">Position</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="position"
              id="position"
              value={user.position}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="number"
              name="age"
              id="age"
              value={user.age}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label htmlFor="bloodGroup">BloodGroup</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="bloodGroup"
              id="bloodGroup"
              value={user.bloodGroup}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label htmlFor="confirmpassword">Confirm Password</label>
            &nbsp;&nbsp;
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              value={user.confirmpassword}
              onChange={handleInputs}
            />
          </div>
          <br></br>
          <div>
              <input
                type="submit"
                name="register"
                id="register"
                value={"Register"}
                onClick={PostData}
              />
          </div>
        </form>
      </header>
    </div>
  );
}
export default Register;
