function hasSingleCycle(array) {
    // Write your code here.
      // start at index 0, increase i by input[i]
      // if i is greater than input.length use modulus to find new i
      // if i is less than input use while loop and count from the end
      // at each iteration, replace input[i] with 'x'
      // if there are any numbers left in our arry return false
      
      // time complexity = O(n) where n is length of the array
      // space complexity = O(1)
      let counter = 0;
      let index = 0;
      while (counter < array.length) {
          if (array[index] === 'x') return false;		
          let newIndex = index + array[index];
          if (newIndex >= array.length) {
              newIndex = newIndex % array.length
          }
          while (newIndex < 0) {
              newIndex = array.length - ((newIndex * -1))
          }
          
          array[index] = 'x';
          index = newIndex;
          counter += 1;
      }
      if (index === 0) return true;
      else return false;
  } 
  
  // Do not edit the line below.
  exports.hasSingleCycle = hasSingleCycle;
  