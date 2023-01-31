import { Link } from "react-router-dom";
import Image from "./loginForm/media/illustration.svg";

const Register = () => {
  return (
    <>
      <div className="wrapper-container d-flex justify-content-center ">
        <div className="register-container flex-column mb-3">
          <h1>Sign up</h1>
          <form>
            <div>
              {/*  Name input  */}
              <input
                type="text"
                id="nameRegisterInput"
                className="form-control"
              />
              <label className="formLabel" for="nameRegisterInput">
                Your name
              </label>
            </div>

            {/*  Email input */}
            <div>
              <input
                type="email"
                id="emailRegisterInput"
                className="form-control"
              />
              <label className="formLabel" for="emailRegisterInput">
                Your Email
              </label>
            </div>

            {/*  Password input */}
            <div>
              <input
                type="password"
                id="pwdRegisterInput"
                className="form-control"
              />
              <label className="formLabel" for="pwdRegisterInput">
                Password
              </label>
            </div>

            {/*  Repeat your Password input */}
            <div>
              <input type="password" className="form-control" />
              <label>Repeat your Password</label>
            </div>

            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="checkbox"
                checked
              />
              <label className="form-check-label" for="checkbox">
                I agree all statements in{" "}
                <Link to="/movies">Terms of service</Link>
              </label>
            </div>

            <button type="button" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="image-container">
          <img className="illustration" src={Image} alt="login-illustration" />
        </div>
      </div>
    </>
  );
};

export default Register;
