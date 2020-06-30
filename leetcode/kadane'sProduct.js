var maxProduct = function(nums) {
    let maxSoFar = -Infinity;
    let maxEndingHere = 1;
    let min = 1;
    
    for (let i=0; i<nums.length; i++) {
        
        [maxEndingHere, min] = [Math.max(nums[i], min * nums[i], maxEndingHere * nums[i]),
                                Math.min(nums[i], min * nums[i], maxEndingHere * nums[i])];
    
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
    
};

//https://leetcode.com/problems/maximum-product-subarray/submissions/