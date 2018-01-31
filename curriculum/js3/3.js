/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array}
 * @return {array}
 */

const createObject = (arr, obj={}, i=0)=>{
  if(i === arr.length){
    return obj;
  }
  if(!obj[arr[i]]){
    obj[arr[i]]=0;
  }
  obj[arr[i]]+=1;
  return createObject(arr, obj, i+1);
}
const timesRepeat = (obj, keys, i=0, arr1=[])=>{
  if(i === keys.length){
    return arr1;
  }
  if(obj[keys[i]]>1){
    arr1.push(parseInt(keys[i]));
  }
  return timesRepeat(obj, keys, i+1, arr1);
}
const solution = (arr)=>{
  const obj = createObject(arr);
  return timesRepeat(obj,Object.keys(obj));
}

module.exports = {
  solution
}
