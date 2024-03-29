import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, data, sortColumn, onSort }) => {
  return (
    <>
      <hr className="hr" />
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody columns={columns} data={data} />
      </table>
    </>
  );
};

export default Table;
