const Input = ({ name, label, value, onChange }) => {
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
    </>
  );
};

export default Input;
