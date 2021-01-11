// variation of https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
    let [start, end] = [0, 0];
    let maxSum = nums[0];
    const sumsArray = new Array(nums.length);
    sumsArray[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let newStart;
        let newEnd = i;
        if (sumsArray[i - 1] < 0) {
            sumsArray[i] = nums[i];
            newStart = i;
        } else {
            sumsArray[i] = sumsArray[i - 1] + nums[i];
            newStart = start;
        }
        if (sumsArray[i] > maxSum) {
            maxSum = sumsArray[i];
            start = newStart;
            end = newEnd
        }
    }
    return nums.slice(start, end + 1);
};