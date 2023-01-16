import Like from "./like";
import _ from "lodash";

const TableBody = ({ columns, data, onLike, onDelete }) => {
  // console.log("data->", data);
  // console.log("columns->", columns);

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {columns.map((column, index) => (
            <td key={index}>{_.get(item, column.path)}</td>
          ))}
          <td>
            <Like status={item.liked} onClick={() => onLike(item)} />
          </td>
          <td>
            <button
              onClick={() => onDelete(item)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
      {/* {data.map((item) => (
        <tr key={item._id}>
          <td>{item.title}</td>
          <td>{item.genre.name}</td>
          <td>{item.numberInStock}</td>
          <td>{item.dailyRentalRate}</td>
         

         
        </tr>
      ))} */}
    </tbody>
  );
};

export default TableBody;
