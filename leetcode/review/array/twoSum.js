var twoSum = function(nums, target) {
    const seen = {};
    for (let i=0; i<nums.length; i++) {
        let diff = target - nums[i];
        if (diff in seen) {
            return [seen[diff], i];
        }
        seen[nums[i]] = i;
    }
    return -1;
};

// https://leetcode.com/problems/two-sum/