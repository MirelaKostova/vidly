import { Link } from "react-router-dom";
import Form from "./loginForm/form";
import Joi from "joi";
import Image from "./loginForm/media/register_illustration_2.svg";

class Register extends Form {
  state = {
    data: { username: "", password: "", email: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().min(3).max(30).required().label("Username"),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .label("Email")
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]"))
      .label("Password")
      .required(),
  });

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="wrapper-container d-flex justify-content-center ">
        <div className="login-container">
          <form onSubmit={this.handleSubmit}>
            <h1>Hello, friend!</h1>
            <p>Please enter your details</p>

            <div className="form-outline">
              <div className="form-outline mb-4">
                {this.renderInput("username", "Name", "nameInput")}
                {this.renderInput("email", "Your Email", "emailInput")}
                {this.renderInput(
                  "password",
                  "Password",
                  "password",
                  "pswInput"
                )}
              </div>
            </div>

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

                  <label className="form-check-label mb-2" htmlFor="checkbox">
                    I agree all statements in{" "}
                    <Link to="/movies">Terms of service</Link>
                  </label>
                </div>
              </div>
            </div>
            {/* -------------- Button -------------- */}
            {this.renderButton("Register")}
          </form>
        </div>

        {/* -------------- Image -------------- */}
        <div className="image-container">
          <img
            className="illustration"
            src={Image}
            alt="register-illustration"
          />
        </div>
      </div>
    );
  }
}

export default Register;
