/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

// recursive
const solution = (a, i=0, max=a[i]) => {
  if (a.length === 0) return ''; // base case for test
  if (a.length === i) return max;
  if (a[i] > max) max = a[i];
  return solution(a, i+1, max);
};

// array method
// const solution = (a) => {
//   if (a.length === 0) return '';
//   return a.reduce((acc, cur) => {
//     if (cur > acc) return cur;
//     return acc;
//   }, a[0]);
// };

// Math.max() & spread operator
// const solution = (a) => {
//   if (a.length === 0) return '';
//   return Math.max(...a);
// };


module.exports = {
  solution,
};
