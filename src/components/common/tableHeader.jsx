const TableHeader = ({ columns, sortColumn, onSort }) => {
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
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
            style={{ cursor: "pointer" }}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
