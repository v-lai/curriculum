/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

// recursive
const solution = (a, i=0, sum=0) => {
  if (a.length === 0) return ''; // base case for test
  if (a.length === i) return sum;
  sum += a[i];
  return solution(a, i+1, sum);
};

// array method
// const solution = (a) => {
//   if (a.length === 0) return '';
//   return a.reduce((acc, cur)=> {
//     acc += cur;
//     return acc;
//   }, 0);
// };

module.exports = {
  solution,
};
