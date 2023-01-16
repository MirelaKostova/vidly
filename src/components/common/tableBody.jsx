import _ from "lodash";

const TableBody = ({ columns, data }) => {
  const renderCell = (item, column) => {
    if (column.content) {
      return column.content(item);
    }
    return _.get(item, column.path);
  };

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {columns.map((column, index) => (
            <td key={index}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
