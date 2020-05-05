var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let bestSums = new Array(nums.length - 1);
    // bestSums[0] = nums[0];
    // bestSums[1] = Math.max(nums[0], nums[1]);
    let prevPrevBest = nums[0]
    let prevBest = Math.max(nums[0], nums[1]);
    let currentBest = prevBest;
    for (let i = 2; i < nums.length; i++) {
        currentBest = Math.max(prevBest, prevPrevBest + nums[i])
        prevPrevBest = prevBest;
        prevBest = currentBest;
    }
    
    return currentBest;
};