/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

// recursive
const solution = (a, b, i=0, j=a.length-1, arr=a.sort((a, b) => a-b)) => {
  if (i >= j) return false;
  if (arr[i] + arr[j] === b) return true;
  if (arr[i] + arr[j] > b) j--;
  if (arr[i] + arr[j] < b) i++;
  return solution(a, b, i, j);
};

// iterative
// const solution = (a, b) => {
//   const arr = a.sort((a, b) => a-b);
//   let i = 0;
//   let j = arr.length -1;
//   while (i < j) {
//     if (arr[i] + arr[j] === b) return true;
//     if (arr[i] + arr[j] > b) j--;
//     if (arr[i] + arr[j] < b) i++;
//   }
//   return false;
// };

module.exports = {
  solution,
};
