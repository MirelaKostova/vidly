const Pagination = ({ itemsCount, pageSize }) => {
  const pagesCount = itemsCount / pageSize;
  let classes = selected ? "page-item active" : "page-item";

  return (
    <nav>
      <ul className="pagination">
        <li className={classes} onClick={onClick}>
          <a className="page-link">1</a>
        </li>
        <li className={classes} onClick={onClick}>
          <a className="page-link">
            2 <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className={classes} onClick={onClick}>
          <a className="page-link">3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
