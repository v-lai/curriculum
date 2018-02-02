/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, i=2, gcd=1, min=Math.min(a, b)) => {
  if (a < 1 || b < 1) return 0;
  if (a === 1 || b === 1) return 1;
  if (a % i === 0 && b % i === 0) gcd = i;
  if (i === min) return gcd;
  return solution(a, b, i+1, gcd);
};

module.exports = {
  solution,
};
