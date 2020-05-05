function findArrayQuadruplet(arr, s) {
    // your code goes here
    // sort
    arr.sort((a,b) => (a-b))
    
    for (let i=0; i<arr.length - 3; i++) {
      for (let j = i+1; j<arr.length - 2; j++) {
        let start = j + 1;
        let end = arr.length - 1;
        let currentTarget = s - arr[i] - arr[j];
        while (start < end) {
          let currentSum = arr[start] + arr[end];
          if (currentSum < currentTarget) {
            start += 1;
          } else if (currentSum > currentTarget) {
            end -= 1;
          } else {
            return [arr[i], arr[j], arr[start], arr[end]];
          }
        }
      }
    }
    return [];
}
  