function findPairsWithGivenDifference(arr, k) {
    // your code goes here
    let output = [];
    let hash = {};
    for (let x of arr) {
      hash[x - k] = x;
    }
    
    for (let y of arr) {
      if (y in hash) {
        output.push([hash[y], y])
      }
    }
  
    
    return output;
    
}
       