/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (a, b) => {
  return Object.entries(a).map(([key, val]) => b(key, val));
};

module.exports = {
  solution,
};
