import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import Joi from "joi";
import Illustration from "./media/illustration.svg";
import Input from "./input";
import "./loginForm.css";

const mySchema = {
  username: Joi.string().min(3).max(30).required().label("Username"),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]"))
    .label("Password")
    .required(),
};

class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };

  schema = Joi.object(mySchema);

  // componentDidMount = () => {
  //   console.log("componentDidMount");
  // };

  validate = () => {
    const options = { abortEarly: false };
    // abortEarly -> stops validation on the first error,
    // when false -> returns all the errors found.
    const { account } = this.state;
    const { error } = this.schema.validate(account, options);

    if (!error?.details) return null;

    const errors =
      error && error.details.map((err) => (error[err.path[0]] = err.message));

    // console.log("errors->", errors);
    return errors;
  };

  validateProperty = ({ name, value }) => {
    // console.log("value -> ", value);
    // console.log("name -> ", name);
    const obj = {};
    obj[name] = value;

    // console.log("this.schema->", this.schema);
    // console.log("obj->", obj);
    // console.log("schema->", this.schema, "name->", name);
    // console.log("schema->", schema);

    const validateResult = mySchema[name].validate(value);

    // console.log("VALIDATE_PROPERTY Error -> ", validateResult, obj);

    const { error } = validateResult;

    return error ? error.details[0].message : null;
  };

  // Very basic validation. (not scalable)
  // -----------------------------------------
  // validate = () => {
  //   const { account } = this.state;
  //   const errors = {};
  //   if (account.username.trim() === "")
  //     errors.username = "Username is required.";
  //   if (account.password.trim() === "")
  //     errors.password = "Password is required.";

  //   return Object.keys(errors).length === 0 ? null : errors;
  // };

  // Very basic validation on change
  // -------------------------------
  // validateProperty = ({ name, value }) => {
  //   if (name === "username")
  //     if (value.trim() === "") return "Username is required.";
  //   // ...
  //   if (name === "password")
  //     if (value.trim() === "") return "Password is required.";
  //   // ...
  // };

  handleSubmit = (event) => {
    if (event) event.preventDefault();
    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    // console.log("errorMessage -> ", errorMessage);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });

    // console.log("this.state -> ", this.state);
  };

  // Very basic validation. (not scalable)
  // -----------------------------------------
  // validate = () => {
  //   const { account } = this.state;
  //   const errors = {};
  //   if (account.username.trim() === "")
  //     errors.username = "Username is required.";
  //   if (account.password.trim() === "")
  //     errors.password = "Password is required.";

  //   return Object.keys(errors).length === 0 ? null : errors;
  // };

  // Very basic validation on change
  // -------------------------------
  // validateProperty = ({ name, value }) => {
  //   if (name === "username")
  //     if (value.trim() === "") return "Username is required.";
  //   // ...
  //   if (name === "password")
  //     if (value.trim() === "") return "Password is required.";
  //   // ...
  // };

  render() {
    const { account, errors } = this.state;

    return (
      <div className="wrapper-container d-flex justify-content-center">
        <div className="login-container">
          <form onSubmit={this.handleSubmit}>
            <h1>Welcome back</h1>
            <p>Please enter your details</p>

            <div className="form-outline">
              <div className="form-outline mb-4">
                <Input
                  name="username"
                  value={account.username}
                  label="Username"
                  onChange={this.handleChange}
                  error={errors.username}
                />

                <Input
                  name="password"
                  value={account.password}
                  label="Password"
                  onChange={this.handleChange}
                  error={errors.password}
                />
              </div>

              {/* 2 column grid layout for inline styling */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  {/* -------------- Checkbox -------------- */}
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
                  {/* -------------- Forgot password? -------------- */}
                  <Link to={"/movies"}>Forgot password?</Link>
                </div>
              </div>
            </div>
            {/* -------------- Submit button -------------- */}
            <button
              type="button"
              className="btn btn-primary mb-4"
              onClick={this.handleSubmit}
            >
              Sign in
            </button>
            <div className="text-center">
              <p>
                Not a member? <Link to="/register">Sign up</Link>
              </p>
            </div>
          </form>
        </div>
        {/* -------------- Image -------------- */}
        <div className="image-container">
          <img
            className="illustration"
            src={Illustration}
            alt="login-illustration"
          />
        </div>
      </div>
    );
  }
}

export default LoginForm;

/* const LoginForm = () => {
//   // const [user, setUser] = useState({
//   //   username: "",
//   //   password: "",
//   // });

//   // const schema = {
//   //   username: Joi.string().required(),
//   //   password: Joi.string().min(3).required(),
//   // };

//   // const [errors, setErrors] = useState({});
//   // const clearState = () => {
//   //   setUser({
//   //     username: "",
//   //     password: "",
//   //   });
//   // };

//   // const validateInput = (event) => {
//   //   if (event) event.preventDefault();
//   //   const result = Joi.validate(user, schema);
//   //   console.log(result);

//   //   const { error } = result;

//   //   if (!error) {
//   //     return null;
//   //   } else {
//   //     const errorData = {};
//   //     for (let item of error.details) {
//   //       const name = item.path[0];
//   //       const message = item.message;
//   //       errorData[name] = message;
//   //     }
//   //     console.log(errors);
//   //     setErrors(errorData);
//   //     return errorData;
//   //   }
//   //   // if (username.trim() === "") {
//   //   //   errors.username = "Username is required.";
//   //   // }

//   //   // if (password.trim() === "") {
//   //   //   errors.password = "Password is required.";
//   //   // }

//   //   // return Object.keys(errors).length === 0 ? null : errors;
//   // };

//   // const validateForm = (event) => {
//   //   event.preventDefault();
//   //   const result = Joi.validate(customer, schema, { abortEarly: false });
//   //   console.log(result);
//   //   const { error } = result;
//   //   if (!error) {
//   //     return null;
//   //   } else {
//   //     const errorData = {};
//   //     for (let item of error.details) {
//   //       const name = item.path[0];
//   //       const message = item.message;
//   //       errorData[name] = message;
//   //     }
//   //     console.log(errors);
//   //     setErrors(errorData);
//   //     return errorData;
//   //   }
//   // };

//   // const handleSubmit = (event) => {
//   //   if (event) event.preventDefault();
//   //   console.log("Hello");

//   //   // const errors = validate(username, password);

//   //   // if (errors) return;

//   //   const { name, value } = event.target;
//   //   let errorData = { ...errors };

//   //   const errorMessage = validateProperty(event);
//   //   if (errorMessage) {
//   //     errorData[name] = errorMessage;
//   //   } else {
//   //     delete errorData[name];
//   //   }

//   //   let userData = { ...user };
//   //   userData[name] = value;
//   //   setUser(userData);
//   //   setErrors(errorData);
//   // };

//   // const validateProperty = (event) => {
//   //   const { name, value } = event.target;
//   //   const obj = { [name]: value };
//   //   const subSchema = { [name]: schema[name] };
//   //   const result = Joi.validate(obj, subSchema);
//   //   const { error } = result;
//   //   return error ? error.details[0].message : null;
//   // };

//   return (
//     // <div className="wrapper-container d-flex justify-content-center">
//     //   <div className="login-container ">
//     //     <form onSubmit={handleSubmit}>
//     //       <h1>Welcome back</h1>
//     //       <p>Please enter your details</p>

//     //       {/* Username input */
// }
//     //       <div className="form-outline">
//     //         <input
//     //           autoFocus
//     //           type="username"
//     //           id="usernameForm"
//     //           value={user.username}
//     //           className="form-control"
//     //           onChange={(e) => setUser(e.target.value)}
//     //         />
//     //         <label className="form-label" htmlFor="usernameForm">
//     //           Username
//     //         </label>
//     //       </div>
//     //       {/* <div className="alert alert-ganger">{validate().username}</div> */}
//     //       {errors && <div className="alert alert-ganger">{errors}</div>}

//     //       {/* Password input */}
//     //       <div className="form-outline mb-4">
//     //         <input
//     //           type="password"
//     //           id="pwdForm"
//     //           value={user.password}
//     //           className="form-control"
//     //           onChange={(e) => setUser(e.target.value)}
//     //         />
//     //         <label className="form-label" htmlFor="pwdForm">
//     //           Password
//     //         </label>
//     //       </div>
//     //       {/* <div className="alert alert-ganger">{validate().password}</div> */}

//     //       {/* 2 column grid layout for inline styling */}
//     //       <div className="row mb-4">
//     //         <div className="col d-flex justify-content-center">
//     //           {/* Checkbox */}
//     //           <div className="form-check">
//     //             <input
//     //               className="form-check-input"
//     //               type="checkbox"
//     //               value="onChecked"
//     //               id="checkbox"
//     //             />
//     //             <label className="form-check-label" htmlFor="checkbox">
//     //               {" "}
//     //               Remember me{" "}
//     //             </label>
//     //           </div>
//     //         </div>

//     //         <div className="col">
//     //           {/* Simple link */}
//     //           <a href="#!">Forgot password?</a>
//     //         </div>
//     //       </div>

//     //       {/* Submit button */}
//     //       <button
//     //         type="button"
//     //         className="btn btn-primary btn-block mb-4"
//     //         onClick={handleSubmit}
//     //       >
//     //         Sign in
//     //       </button>

//     //       {/* Register buttons */}
//     //       <div className="text-center">
//     //         <p>
//     //           Not a member? <Link to="/register">Register</Link>
//     //         </p>
//     //       </div>
//     //     </form>
//     //   </div>

//     //   {/* Image */}
//     //   <div className="image-container">
//     //     <img
//     //       className="illustration"
//     //       src={Illustration}
//     //       alt="login-illustration"
//     //     />
//     //   </div>
//     // </div>
//     <></>
//   );
// };

// export default LoginForm; */}
