import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";

const MoviesTable = ({ movies, sortColumn, onLike, onDelete, onSort }) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (currMovie) => (
        <Like status={currMovie.liked} onClick={() => onLike(currMovie)} />
      ),
    },
    {
      key: "delete",
      content: (currMovie) => (
        <button
          onClick={() => onDelete(currMovie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <>
      <hr className="hr" />
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody
          columns={columns}
          data={movies}
          onLike={onLike}
          onDelete={onDelete}
        />
      </table>
    </>
  );
};

export default MoviesTable;
