var searchInsert = function(nums, target, closest = Math.floor(nums.length / 2)) {
    if (target > nums[nums.length - 1]) return nums.length;
    if (nums.length === 0) return closest;
    const mid = Math.floor(nums.length / 2);
    if (nums[mid] === target) {
        return mid;
    } else if (target < nums[mid]) {
        return searchInsert(nums.slice(0, mid), target, mid);
    } else {
        let right = nums.slice(mid+1);
        if (right.length === 0) {
            return closest
        } else {
            return searchInsert(right, target, mid) + mid + 1;
        }
    }
};