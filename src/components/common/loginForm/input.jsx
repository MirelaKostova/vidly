const Input = ({ name, label, value, error, onChange }) => {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={name}
        className="form-control"
      />
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Input;
