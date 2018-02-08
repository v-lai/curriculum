/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @param return {number}
 */

// recursive
const solution = (arr, i=0, cache={}, maxVal=0, max=null) => {
  if (arr.length === i) return max;
  cache[arr[i]] = (cache[arr[i]] || 0) + 1;
  if (cache[arr[i]] > maxVal) {
    maxVal = cache[arr[i]];
    max = arr[i];
  }
  return solution(arr, i+1, cache, maxVal, max);
};

// array method - forEach
// const solution = (arr) => {
//   const cache = {};
//   let maxVal = 0;
//   let max = 0;
//   arr.forEach((e) => {
//     cache[e] = (cache[e] || 0) + 1;
//     if (cache[e] > maxVal) {
//       maxVal = cache[e];
//       max = e;
//     }
//   });
//   return max;
// };

// array method - reduce
// const solution = (arr) => {
//   const cache = {};
//   let maxVal = 0;
//   return arr.reduce((acc, cur) => {
//     cache[cur] = (cache[cur] || 0) + 1;
//     if (cache[cur] > maxVal) {
//       maxVal = cache[cur];
//       acc = cur;
//     }
//     return acc;
//   }, 0);
// };

module.exports = {
  solution,
};
