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

const switchAndPush = (arr) => {
  const len = arr.length;
  let copyArr = [...arr];
  const temp = [];
  
  for (let i = 0; i < len; i++) {
    copyArr = changeOrder(copyArr);
    
    temp.push(copyArr);
  }
  
  return temp;
};

// console.log(switchAndPush(['a', 'b', 'c']))

const test = (arr) => {
  const final = [];
  
  for (let i = 0; i < arr.length; i++) {
    const copyArr = [...arr];
    const char = copyArr.splice(i, 1)[0];
    
    const test = switchAndPush(copyArr);
    
    const newTest = test.map((item) => {
      item.push(char);
      
      return item;
    });    
    
    final.push(newTest);
  }
  
  return final;
};

console.log(test(['a', 'b', 'c', 'd']));
