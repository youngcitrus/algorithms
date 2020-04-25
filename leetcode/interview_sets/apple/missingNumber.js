var missingNumber = function(nums) {
    // let set = new Set();
    // for (let i=0; i < nums.length; i++) {
    //     set.add(nums[i]);
    // }
    
    // for (let i=0; i<=nums.length; i++) {
    //     if (!set.has(i)) return i;
    // }
    
    let expectedSum = nums.length * (nums.length + 1) / 2;
    let actualSum = nums.reduce((acc,el) => acc + el);
    return expectedSum - actualSum;
};