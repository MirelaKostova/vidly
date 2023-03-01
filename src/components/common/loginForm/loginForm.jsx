import { Link } from "react-router-dom";
import Illustration from "./media/login_illustration.svg";
import Form from "./form";
import Joi from "joi";
import "./loginForm.css";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().min(3).max(30).required().label("Username"),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]"))
      .label("Password")
      .required(),
  });

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="wrapper-container d-flex justify-content-center">
        <div className="login-container">
          <form onSubmit={this.handleSubmit}>
            <h1>Welcome back</h1>
            <p>Please enter your details</p>

            <div className="form-outline">
              <div className="form-outline mb-4">
                {this.renderInput("username", "Username", "usernameInput")}
                {this.renderInput(
                  "password",
                  "Password",
                  "password",
                  "loginPwd"
                )}
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
            {this.renderButton("Sign in")}

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
