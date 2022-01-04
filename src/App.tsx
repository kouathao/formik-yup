import { Formik } from "formik";
import React from "react";
import "./App.css";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(6, "Min of 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const App = () => {
  return (
    <div className="App">
      <h1>Sign up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({ handleSubmit, errors, values, handleChange, touched, isValid }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
            />
            {touched.firstName && errors.firstName && (
              <small style={{ color: "red" }}>{errors.firstName}</small>
            )}
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={values.lastName}
              onChange={handleChange}
            />
            {touched.lastName && errors.lastName && (
              <small style={{ color: "red" }}>{errors.lastName}</small>
            )}
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={values.email}
              onChange={handleChange}
            />
            {touched.email && errors.email && (
              <small style={{ color: "red" }}>{errors.email}</small>
            )}
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange}
            />
            {touched.password && errors.password && (
              <small style={{ color: "red" }}>{errors.password}</small>
            )}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <small style={{ color: "red" }}>{errors.confirmPassword}</small>
            )}
            <button
              type="submit"
              style={{ background: isValid ? "#21ffc3" : "grey" }}
              disabled={!isValid}
            >
              Sign Up
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App;
