import _ from "lodash";

const sort = (filteredMovies, sortColumn) => {
  return _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);
};

export default sort;
