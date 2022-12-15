import _ from "lodash";

const Pagination = ({ itemsCount, itemsToShow, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / itemsToShow);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  // {
  //   console.log("itemsCount ->", itemsCount);

  //   console.log("pages ->", pages);
  // }

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button onClick={() => onPageChange(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
