import Like from "./like";

const TableBody = ({ movies, onLike, onDelete }) => {
  //   console.log("movies->", movies);

  return (
    <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like status={movie.liked} onClick={() => onLike(movie)} />
          </td>

          <td>
            <button
              onClick={() => onDelete(movie)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
