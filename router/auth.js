const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require('../db/conn')
const User = require("../model/userSchema");

router.post("/register", async (req, res) => {
  console.log(req.body)
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
    confirmpassword
  } = req.body;

  if (
    !fullname ||
    !username ||
    !contact ||
    !email ||
    !ID ||
    !position ||
    !age ||
    !bloodGroup ||
    !password ||
    !confirmpassword 
  ) {
    return res.status(422).json({ error: "Please fill all the fields..." });
  }

  try {
    const userExist = await User.findOne({
      username: username
    });

    if (userExist) {
      return res.status(422).json({ error: "User already exist..." });
    } else if (password != confirmpassword) {
      return res.status(422).json({ error: "Passwords are not matching..." });
    } else {
      const user = new User({
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
      });

      const userRegister = await user.save();

      if (userRegister) {
        res.status(201).json({ message: "User registered successfully..." });
      } else {
        res.status(500).json({ error: "Failed to register..." });
      }
    }
  } catch (err) {
    console.log(err);
  }
});


router.post("/login", async (req, res) => {

  console.log(req.body)
  const { username, password } = req.body;
  if (!username ||!password) {
    return res.status(422).json({ error: "Please fill all the fields..." });
  }
  const user = await User.findOne({username: username})
  if (!user) {
    return res.status(422).json({ error: "User does not exist..." });
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(422).json({ error: "Password is incorrect..." });
  }


  return res.status(200).json("Success")
})

module.exports = router;