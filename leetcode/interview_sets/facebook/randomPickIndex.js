var Solution = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const result = [];
    for (let i=0; i<this.nums.length; i++) {
        if (this.nums[i] === target) {
            result.push(i);
        }
    }
    let resultIndex = Math.floor(Math.random() * (result.length));
    return result[resultIndex];
};

// https://leetcode.com/problems/random-pick-index/