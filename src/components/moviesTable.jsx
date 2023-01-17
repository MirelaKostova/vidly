import Like from "./common/like";
import Table from "./common/table";

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
    <Table
      columns={columns}
      data={movies}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default MoviesTable;
