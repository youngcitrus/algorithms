var findDisappearedNumbers = function(nums) {
    for (let i=0; i< nums.length; i++) {
        let newIndex = Math.abs(nums[i]) - 1;
        if (nums[newIndex] > 0) {
            nums[newIndex] *= -1;
        }
    }
    
    result = [];
    for (let i=0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};