import Like from "./like";

const TableBody = ({ data, onLike, onDelete }) => {
  //   console.log("movies->", movies);

  return (
    <tbody>
      {/* {data.map((item) => (
        <tr key={item._id}>
          <td>{item.title}</td>
          <td>{item.genre.name}</td>
          <td>{item.numberInStock}</td>
          <td>{item.dailyRentalRate}</td>
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
      ))} */}
    </tbody>
  );
};

export default TableBody;
