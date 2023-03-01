const Input = ({ name, label, error, ...rest }) => {
  return (
    <>
      <label className="form-label" htmlFor={name}>
        {label}
      </label>

      <input {...rest} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Input;
