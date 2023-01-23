const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="d-flex justify-content-center">
        <form>
          <h1>Login</h1>
          {/* <!-- Email input --> */}
          <div className="form-outline">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
            <label className="form-label" for="form2Example2">
              Password
            </label>
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label className="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              {/* <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button type="button" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
          </div>
        </form>
        {/* <form>
          <div className="form-group mb-4">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button type="button" class="btn btn-primary btn-block mb-4">
            Sign in
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default LoginForm;
