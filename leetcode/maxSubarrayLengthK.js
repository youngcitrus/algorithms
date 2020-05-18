var maxSubArrayLen = function(nums, k) {
    const sumsHash = {0: -1};
    let sum = 0;
    let maxLength = 0;
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        if ((sum - k) in sumsHash) {
            let length = i - sumsHash[sum - k];
            maxLength = length > maxLength ? length : maxLength;
        }
        if (!(sum in sumsHash)) sumsHash[sum] = i;
    }
    console.log(sumsHash)
    return maxLength;
};