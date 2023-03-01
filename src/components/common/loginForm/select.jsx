const Select = ({ name, label, error, ...rest }) => {
  return (
    <>
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <select {...rest} name={name} className="form-control">
        <option></option>
        <option>Action</option>
        <option>Comedy</option>
        <option>Thriller</option>
      </select>

      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Select;
