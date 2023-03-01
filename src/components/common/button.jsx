import { useNavigate } from "react-router-dom";

const Button = ({ label, path }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="btn btn-primary mb-4"
      onClick={() => navigate(path)}
    >
      {label}
    </button>
  );
};
export default Button;
