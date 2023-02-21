const Input = ({ name, label, error, ...rest }) => {
  return (
    <>
      <input {...rest} name={name} id={name} className="form-control" />
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Input;
