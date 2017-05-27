/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

const changeOrder = (arr) => {
  const newArr = [...arr];
  const first = newArr.shift();
  
  newArr.push(first);
  
  return newArr;
};

// console.log(changeOrder([1, 2, 3, ]));

const test = (arr) => {
  const copyArr = [...arr];
  const final = [];
  
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    const copyArr = [...arr];
    const newArr = [copyArr.splice(i)];
    let temp = [];
    
    for (let j = 0; j < copyArr.length; j++) {
      const nextChar = copyArr[j];
      
      newArr.push(nextChar);
    }
    
    temp = changeOrder(copyArr);
    final.push(newArr);
  }
  
  return final;
};

console.log(test(['a', 'b', 'c']));

// const allAnagrams = (str = '') => {
//   // Your code here.
//   const splitStr = str.split('');
//   
//   console.log(splitStr);
// };
// 
// allAnagrams('abc');