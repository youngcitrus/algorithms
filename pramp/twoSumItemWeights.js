function getIndicesOfItemWeights(arr, limit) {
    // your code goes here
    let hash = {};
    for (let i = arr.length - 1; i >= 0; i--) {
      let target = limit - arr[i];
      if (target in hash) {
        return [hash[target], i];
      }
      hash[arr[i]] = i;
    }
    
    return [];
}