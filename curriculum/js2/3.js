/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

// recursive
// const solution = (a, i=0, res=[]) => {
//   if (a.length === i) return res;
//   if (!isPrime(a[i])) {
//     res.push(1);
//   } else {
//     res.push(a[i]);
//   }
//   return solution(a, i+1, res);
// };

// array method
const solution = (a) => {
  return a.map((e) => {
    if (!isPrime(e)) return 1;
    return e;
  });
};

const isPrime = (n, i = 2, sqrt = Math.sqrt(n)) => {
  if (n === 0) return false;
  if (n <= 1) n = -n;
  if (sqrt <= i) return true;
  if (n % i === 0) return false;
  return isPrime(n, i + 1);
};

module.exports = {
  solution,
};
