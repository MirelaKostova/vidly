import { Component } from "react";
import Input from "./input";
import Select from "./select";
import Joi from "joi";

// const getCurrSchema = () => {
//   console.log("currSchema ->", this.schema);
//   return this.schema;
// };

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  constructor(props, context) {
    // super(props, context);
    // this.fields = this.fields.bind(this);
  }

  // that's a field property which should be set from component extender:
  // {
  //  username: Joi.string().min(3).max(30).required().label("Username"),
  // }
  fields = {};

  schema = Joi.object(this.fields);

  validate = () => {
    console.log("this.fields", this.fields);
    console.log("this.schema", this.schema);
    const options = { abortEarly: false };
    // abortEarly -> stops validation on the first error,
    // when false -> returns all the errors found.
    const { data } = this.state;
    // console.log("data -> ", data);
    const { error } = this.schema.validate(data, options);

    // console.log("Valdidate data: ", data);
    console.log("error: ", error);
    console.log("error details: ", error.details);

    if (!error?.details) return null;

    return (
      error && error.details.map((err) => (error[err.path[0]] = err.message))
    );
  };

  validateProperty = ({ name, value }) => {
    // console.log("name->", name);
    // console.log("value->", value);

    console.log();

    const { error } = this.fields[name]?.validate(value);

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

  renderSelect = (name, label, id) => {
    return (
      <Select
        name={name}
        label={label}
        id={id}
        // type={type}
        // error={errors[name]}
      />
    );
  };

  renderInput = (name, label, id, type = "text") => {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        label={label}
        id={id}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderButton = (label) => {
    return (
      <button
        //disabled={this.validate()}
        type="button"
        className="btn btn-primary mb-4"
        onClick={this.handleSubmit}
      >
        {label}
      </button>
    );
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
