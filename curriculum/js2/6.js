/**
 * Given an array, return an array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

// recursive
const solution = (a, i=0, res=[]) => {
  if (a.length === i) return res;
  if (a[i] > 5) res.push(a[i]);
  return solution(a, i+1, res);
};

// array method
// const solution = (a) => {
//   return a.filter((e) => {
//     return e > 5;
//   });
// };

module.exports = {
  solution,
};
