import React from "react";
import Joi from "joi";
import Illustration from "./media/illustration.svg";
import { Link } from "react-router-dom";
import "./loginForm.css";

const LoginForm = () => {
  const schema = {
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  };

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const validate = (username, password) => {
    const errors = {};

    if (username.trim() === "") {
      errors.username = "Username is required.";
    }

    if (password.trim() === "") {
      errors.password = "Password is required.";
    }

    return Object.keys(errors).length === 0 ? null : errors;
    // const validateUsername = Joi.validate(username, schema);

    // const validatePassword = Joi.validate(password, schema);
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    console.log("Hello");

    // const errors = validate(username, password);

    // if (errors) return;
  };

  return (
    <div className="wrapper-container d-flex justify-content-center">
      <div className="login-container ">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <p>Please enter your details</p>

          {/* Username input */}
          <div className="form-outline">
            <input
              autoFocus
              type="username"
              id="usernameForm"
              value={username}
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="form-label" htmlFor="usernameForm">
              Username
            </label>
          </div>
          {/* <div className="alert alert-ganger">{validate().username}</div> */}
          {/* {errors && <div className="alert alert-ganger">{errors}</div>} */}

          {/* Password input */}
          <div className="form-outline mb-4">
            <input
              type="password"
              id="pwdForm"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form-label" htmlFor="pwdForm">
              Password
            </label>
          </div>
          {/* <div className="alert alert-ganger">{validate().password}</div> */}

          {/* 2 column grid layout for inline styling */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* Checkbox */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="onChecked"
                  id="checkbox"
                />
                <label className="form-check-label" htmlFor="checkbox">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              {/* Simple link */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={handleSubmit}
          >
            Sign in
          </button>

          {/* Register buttons */}
          <div className="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>

      {/* Image */}
      <div className="image-container">
        <img
          className="illustration"
          src={Illustration}
          alt="login-illustration"
        />
      </div>
    </div>
  );
};

export default LoginForm;
