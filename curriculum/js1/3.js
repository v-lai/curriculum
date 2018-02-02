/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, i=0, s='') => {
  if (a <= 0 || a === i) return s;
  return solution(a, i+1, s+'hello');
};

module.exports = {
  solution,
};
