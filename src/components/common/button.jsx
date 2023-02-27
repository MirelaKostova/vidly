const Button = ({ label, onClick }) => {
  return (
    <button type="button" className="btn btn-primary mb-4" onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
