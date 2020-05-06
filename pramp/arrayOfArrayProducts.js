/*
function arrayOfArrayProducts(arr) {
  // your code goes here
  if (arr.length <= 1) return [];
  
  let n = arr.length;
  let leftRunning = new Array(n + 1)
  leftRunning[0] = 1;
  for (let i = 1; i < n + 1; i++) {
    leftRunning[i] = leftRunning[i - 1] * arr[i - 1];
  }
  
  let rightRunning = new Array(n + 2);
  rightRunning[0] = null;
  rightRunning[n + 1] = 1;
  
  for (let i = n; i >= 1; i--) {
    rightRunning[i] = rightRunning[i + 1] * arr[i - 1];
  }
  
  let answer = new Array(n);
  for (let i = 0; i < n; i++) {
    answer[i] = leftRunning[i] * rightRunning[i + 2];
  }
  
  return answer;
}
*/

function arrayOfArrayProducts(arr) {
    if (arr.length <= 1) return [];
    let leftRunning = [];
    leftRunning[0] = arr[0];
    for (let i=1; i<arr.length; i++) {
      leftRunning[i] = leftRunning[i - 1] * arr[i];
    }
    
    let rightRunning = [];
    rightRunning[arr.length - 1] = arr[arr.length - 1]
    for (let i = arr.length - 2; i >= 0; i--) {
      rightRunning[i] = rightRunning[i + 1] * arr[i];
    }
    
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        result[i] = rightRunning[1];
      } else if (i === arr.length - 1) {
        result[i] = leftRunning[arr.length - 2]
      } else {
        result[i] = leftRunning[i - 1] * rightRunning[i + 1];
      }
    }
    return result;
  }