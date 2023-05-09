import React from "react";

const validation = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "Username required";
  } else if (values.username.length < 5) {
    errors.username = "Username must be more than 5 chars";
  }

  if (!values.complaint) {
    errors.complaint = "Complaint required";
  } 

  return errors;
};

export default validation;
