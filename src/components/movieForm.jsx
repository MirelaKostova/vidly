import { useParams, useNavigate } from "react-router-dom";

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>Movie Form </h1>
      <p>{`Id: ${id}`}</p>
      <button className="btn btn-primary" onClick={() => navigate("/movies")}>
        Save
      </button>
    </>
  );
};

export default MovieForm;
