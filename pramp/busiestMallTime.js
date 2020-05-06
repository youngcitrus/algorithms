function findBusiestPeriod(data) {
    // your code goes here
    let largestNum = -Infinity;
    let bestTime;
    let currentNum = 0;
    
    let i = 0;
    while (i < data.length) {
      let j = i + 1;
      while (j < data.length && data[i][0] === data[j][0]) {
        j++;
      }
      // j = 3, i = 0
      
      let subset = data.slice(i,j);
      subset.forEach(el => {
        let addOrSubtract = el[2] === 1 ? 1 : -1
        currentNum += el[1] * addOrSubtract;
      })
      
      if (currentNum > largestNum) {
        largestNum = currentNum;
        bestTime = data[i][0];
      }
      
      i = j;
       
    }
    
    return bestTime;
    
  }
  
  // figure out busiest timestamp of mall
  // given data: [timestamp, count visitors, entering/exiting (1 or 0)]
  // 
  
  
  
   
  // iterate over data points
  // grab a subset of data points such that the timestamps are the same
  // then evaluate how many people are in the mall
  // keep a running largest count variable + timestamp
  // if at any point in the mall the num people are larger than our running count, update values
  // return timestamp