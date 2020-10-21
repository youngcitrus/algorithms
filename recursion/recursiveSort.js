// mutative
function sort(nums, sorted = []) {
    // your code here
    if (nums.length === 0) return sorted;
    let smallest = Infinity;
    let smallestIndex;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < smallest) {
            smallest = nums[i];
            smallestIndex = i;
        }
    }
    sorted.push(smallest);
    nums.splice(smallestIndex, 1);
    return sort(nums, sorted)
}

// not mutative
function sort(nums, sorted = []) {
    // your code here
    if (nums.length === 0) return sorted;
    let smallest = Infinity;
    let smallestIndex;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < smallest) {
            smallest = nums[i];
            smallestIndex = i;
        }
    }
    sorted.push(smallest);
    return sort(nums.slice(0, smallestIndex).concat(nums.slice(smallestIndex + 1)), sorted)
}
const numbers = [2, 1, 100, 17, 3, 45, 16, 1, 81, 22, 14];

console.log(sort(numbers));
console.log(numbers);