var subarraySum = function(nums, k) {
    const sumHash = {0: 1};
    let sum = 0;
    let count = 0;
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        if ((sum - k) in sumHash) {
            count += sumHash[sum - k];
        }
        if (!(sum in sumHash)) sumHash[sum] = 1;
        else sumHash[sum] += 1;
    }
    return count;
};

console.log(subarraySum([0,0,0], 0));