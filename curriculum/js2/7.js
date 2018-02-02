/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

// recurisve
const solution = (a, b, i=0, count=0) => {
  if (a.length === i) return count;
  if (a[i] === b) count++;
  return solution(a, b, i+1, count);
};

// array methods
// const solution = (a, b) => {
//   return a.reduce((acc, cur) => {
//     if (cur === b) acc++;
//     return acc;
//   }, 0);
// };

// const solution = (a, b) => {
//   return a.filter((e) => {
//     return e === b;
//   }).length;
// };

module.exports = {
  solution,
};
