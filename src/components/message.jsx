const Message = ({ filteredMovies }) => {
  return (
    <p className="fw-bold">
      There are <span className="text-danger">{filteredMovies.length}</span>{" "}
      movies in the database.
    </p>
  );
};

export default Message;
