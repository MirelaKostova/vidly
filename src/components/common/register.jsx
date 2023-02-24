import { Link } from "react-router-dom";
import Form from "./loginForm/form";
import Image from "./loginForm/media/illustration.svg";

class Register extends Form {
  state = {
    data: { username: "", password: "", email: "" },
    errors: {},
  };

  render() {
    return (
      <div className="wrapper-container d-flex justify-content-center ">
        <div className="register-container flex-column mb-3">
          <h1>Sign up</h1>
          <form>
            <div className="form-outline mb-3">
              {this.renderInput("username", "Name", "nameInput")}
              {this.renderInput("email", "Your Email", "emailInput")}
              {this.renderInput("password", "Password", "password", "pswInput")}
            </div>

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

            {this.renderButton("Register")}
          </form>
        </div>

        {/* -------------- Image -------------- */}
        <div className="image-container">
          <img className="illustration" src={Image} alt="login-illustration" />
        </div>
      </div>
    );
  }
}

export default Register;
