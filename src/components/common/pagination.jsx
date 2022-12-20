import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, itemsToShow, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / itemsToShow);

  if (pagesCount === 1) return null;

  // create array of number 1 to pagesCount [1, ...pagesCount]
  const pages = _.range(1, pagesCount + 1);

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

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  itemsToShow: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
