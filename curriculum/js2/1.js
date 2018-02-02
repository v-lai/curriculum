/**
 * Given an array, return array of the same length where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

// recursive
const solution = (a, i=0, res=[]) => {
  if (a.length === i) return res;
  if (a[i] <= 5) {
    res.push(0);
  } else {
    res.push(a[i]);
  }
  return solution(a, i+1, res);
};

// array method
// const solution = (a) => {
//   return a.map((e) => {
//     if (e <= 5) return 0;
//     return e;
//   });
// };

module.exports = {
  solution,
};
