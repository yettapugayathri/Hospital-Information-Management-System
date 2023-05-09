import React from "react";

const validity = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "Username required";
  } else if (values.username.length < 5) {
    errors.username = "Username must be more than 5 chars";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be more than 8 chars";
    }
    
    if (!values.confirmpassword) {
      errors.confirmpassword = "Password conformation is required";
    } 

    

  return errors;
};

export default validity;
