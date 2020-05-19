var productExceptSelf = function(nums) {
    const leftRunningProducts = new Array(nums.length);
    leftRunningProducts[0] = nums[0];
    for (let i=1; i<nums.length; i++) {
        leftRunningProducts[i] = leftRunningProducts[i-1] * nums[i];
    }
    const rightRunningProducts = new Array(nums.length);
    rightRunningProducts[nums.length-1] = nums[nums.length-1];
    for (let i=nums.length-2; i >= 0; i--) {
        rightRunningProducts[i] = rightRunningProducts[i+1] * nums[i];
    }
    const output = new Array(nums.length);
    output[0] = rightRunningProducts[1];
    output[nums.length - 1] = leftRunningProducts[nums.length-2];
    for (let i=1; i<nums.length-1; i++) {
        output[i] = leftRunningProducts[i-1] * rightRunningProducts[i+1];
    }
    return output;
};