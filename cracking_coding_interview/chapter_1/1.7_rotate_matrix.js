// new array, not in place;
function rotateMatrix(array) {
    const result = new Array(array.length);
    
    for (let i = 0; i < result.length; i++) {
      result[i] = [];
    }
  
    for (let i = array.length - 1; i >= 0; i--) {
      for (let j = 0; j < array[0].length; j++) {
        result[j].push(array[i][j])
      }
    }
    return result;
  };
  
  const testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
  ];
  
  console.log('before:');
  console.log(testMatrix[0]);
  console.log(testMatrix[1]);
  console.log(testMatrix[2]);
  console.log(testMatrix[3]);
  
  let test = rotateMatrix(testMatrix);
  
  console.log('after:');
  console.log(test[0]);
  console.log(test[1]);
  console.log(test[2]);
  console.log(test[3]);