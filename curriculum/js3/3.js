/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

// recursive
const solution = (a, i=0, cache={}, b=[])=>{
  if (a.length === i) return b;
  if (cache[a[i]] === 1) b.push(a[i]);
  cache[a[i]] = (cache[a[i]] || 0) + 1;
  return solution(a, i+1, cache, b);
};

// array method - forEach
// const solution = (a)=>{
//   const cache = {};
//   const b = [];
//   a.forEach((e) => {
//     if (cache[e] === 1) b.push(e);
//     cache[e] = (cache[e] || 0) + 1;
//   });
//   return b;
// };

// array method - reduce
// const solution = (a)=>{
//   const cache = {};
//   return a.reduce((acc, cur) => {
//     if (cache[cur] === 1) acc.push(cur);
//     cache[cur] = (cache[cur] || 0) + 1;
//     return acc;
//   }, []);
// };

module.exports = {
  solution,
};
