var canJump = function(nums) {
    const dp = new Array(nums.length).fill(false);
    dp[dp.length-1] = true;
    for (let i=dp.length-2; i>=0; i--) {
        for (let j=1; j <= nums[i] && i+j < dp.length; j++) {
            if (dp[i+j] === true) {
                dp[i] = true;
            }
        }
    }
    console.log(dp)
    return dp[0];
};

//optimized

var canJump = function(nums) {
    let lastPos = nums.length - 1;
    for (let i=nums.length - 2; i>=0; i--) {
        if (i + nums[i] >= lastPos) {
            lastPos = i;
        }
    }
    return lastPos === 0;
};