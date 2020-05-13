/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while (i >= 0 && (nums[i] >= nums[i + 1])) {
        i--;
    }
    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
    return nums;
};

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function reverse(arr, start) {
    let i = start;
    let j = arr.length - 1;
    while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
    }
    return arr;
}

console.log(nextPermutation([1,1]))