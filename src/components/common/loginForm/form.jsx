import { Component } from "react";
import Joi from "joi";

const mySchema = {
  username: Joi.string().min(3).max(30).required().label("Username"),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]"))
    .label("Password")
    .required(),
};

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  schema = Joi.object(mySchema);

  validate = () => {
    const options = { abortEarly: false };
    // abortEarly -> stops validation on the first error,
    // when false -> returns all the errors found.
    const { data } = this.state;
    const { error } = this.schema.validate(data, options);

    if (!error?.details) return null;

    const errors =
      error && error.details.map((err) => (error[err.path[0]] = err.message));
    // console.log("errors->", errors);
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const validateResult = mySchema[name].validate(value);

    const { error } = validateResult;

    return error ? error.details[0].message : null;
  };

  handleSubmit = (event) => {
    if (event) event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    // console.log("errorMessage -> ", errorMessage);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  // Very basic validation. (not scalable)
  // -----------------------------------------
  // validate = () => {
  //   const { data } = this.state;
  //   const errors = {};
  //   if (data.username.trim() === "")
  //     errors.username = "Username is required.";
  //   if (data.password.trim() === "")
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
}

export default Form;