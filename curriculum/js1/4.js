/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b, i=0, s='') => {
  if (a <= 0 || a === i) return s;
  return solution(a, b, i+1, s+b);
};

module.exports = {
  solution,
};
