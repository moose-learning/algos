const input1 = [2, 3, 6, 5, 3, 4, 5, 6, 9, 10, 12, 15];
const input2 = [3, 4, 5, 6, 9];

const findSubArr = (first, second) => {
  const test = [].slice.call(input1);
  let splicedInput1 = []
  let startIndex = -1;
  
  // test.forEach((val, index, list) => {
  //   const input2ValIndex = input2.indexOf(val);
  //   const currentVal = val === input2[input2ValIndex];
  //   const input1Next = list[index + 1];
  //   const input2Next = input2[input2ValIndex + 1];
  //   const input2Len = input2.length;
  //   const input2Last = input2[input2Len - 1]
  //   const input1LastTest = list[index + input2Len - 1];
  //   
  //   if ((currentVal && input1LastTest) && (input1LastTest === input2Last)) {
  //     startIndex = index;
  //     splicedInput1 = [].slice.call(input1).splice(index, input2.length);
  //   }
  // });
  const test4 = test.map((val, index, list) => {
    const input2ValIndex = input2.indexOf(val);
    const currentVal = val === input2[input2ValIndex];
    const input1Next = list[index + 1];
    const input2Next = input2[input2ValIndex + 1];
    const input2Len = input2.length;
    const input2Last = input2[input2Len - 1]
    const input1LastTest = list[index + input2Len];
    
    if (currentVal && (input1Next === input2Next)) {
      return index;
    } else if (currentVal && (input1LastTest === input2Last)) {
      return index;
    }
    
    return false;
  });
  console.log(test4);
  return startIndex;
};

console.log(findSubArr(input1, input2));