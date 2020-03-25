function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
      
      // [75, 105, 195, 195, 285, 330]
      
      // // array of the same length to keep track of maximum non adjacent sum so far
      // put the first two elements in the input array into this array
      // first element is the same, second is the larger of the first two elements
      // when we get to index 2, we compare which number is larger:
      // sumArray[index - 2] + inputArray[index] or sumArray[index-1]
      // we will continue and iterate to the end of the sample input
      // when done, we will have the last lement of our sumArray be the largest sum
      
      // 75, 105, 195, 195, 285, 330
      // 1, 2, 4
      
      // Space: O(n) where n is number of elements in our input array
      // Time: O(n)
      
      if (array.length < 1) return 0;
      if (array.length === 1) return array[0];
      
      const sumArray = array.slice(0,1);
      let largerStart = array[0] > array[1] ? array[0] : array[1];
      sumArray.push(largerStart);
      
      for (let i = 2; i < array.length; i++){
          
          if (sumArray[i - 2] + array[i] > sumArray[i - 1]) {
              sumArray.push(sumArray[i-2] + array[i]);
          } else {
              sumArray.push(sumArray[i - 1]);
          }
      }
      return sumArray[array.length - 1];
      
  }