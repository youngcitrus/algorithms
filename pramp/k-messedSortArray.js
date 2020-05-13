function sortKMessedArray(arr, k) {
    // your code goes here
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        let curr = i
        for (let j = 0; j < k - 1; j++) {
          if (arr[curr] < arr[curr - 1]) {
            swap(arr, curr, curr - 1);
          }
          curr -= 1
        }
      }
    }
    return arr;
}
  
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}