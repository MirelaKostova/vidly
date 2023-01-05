import Like from "./common/like";

const MoviesTable = ({ movies, sortColumn, onLike, onDelete, onSort }) => {
  const raiseSort = (path) => {
    const sortColumnCopy = { ...sortColumn };

    if (sortColumnCopy.path === path) {
      sortColumnCopy.order = sortColumnCopy.order === "asc" ? "desc" : "asc";
    } else {
      sortColumnCopy.path = path;
      sortColumnCopy.order = "asc";
    }
    return onSort(sortColumnCopy);
  };

  return (
    <>
      <hr className="hr" />
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => raiseSort("title")}>Title</th>
            <th onClick={() => raiseSort("genre.name")}>Genre</th>
            <th onClick={() => raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => raiseSort("dailyRentalRate")}>Rate</th>
            <th />
            <th />
          </tr>
        </thead>

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
      </table>
    </>
  );
};

export default MoviesTable;
