import _ from "lodash";

const paginate = (items, pageNumber, pageSize) => {
  // start index of each page
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();
  // _(items) - convert the array into lodash wrapper to chain all the lodash methods

  // _.slice - slice the array from thе startIndex

  // _.take - take the specified amount from the array

  // _value() - turn lodash wrapper into array
};

export default paginate;
