/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = (obj)=>{
  return Math.max(...Object.values(obj));
};

// recursive
// const solution = (obj, i=0, max=-Infinity, values=Object.values(obj))=>{
//   if (i === values.length) return max;
//   if (values[i] > max) max = values[i];
//   return solution(obj, i+1, max);
// };

// array method - forEach
// const solution = (obj)=>{
//   const values = Object.values(obj);
//   let max = -Infinity;
//   values.forEach((e) => {
//     if (e > max) max = e;
//   });
//   return max;
// };

// array method - reduce
// const solution = (obj)=>{
//   return Object.values(obj).reduce((acc, cur) => {
//     if (cur > acc) acc = cur;
//     return acc;
//   }, -Infinity);
// };

module.exports = {
  solution,
};
