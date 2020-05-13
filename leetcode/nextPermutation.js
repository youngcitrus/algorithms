var nextPermutation = function(nums) {
    let i = nums.length - 1;
    while (i > 0) {
        let j = i - 1;
        while (j >= 0) {
            if (nums[i] > nums[j]) {
                swap(nums, i, j);
                let front = nums.slice(0,j+1);
                let end = nums.slice(j+1);
                end.sort((a,b) => a - b); 
                return front.concat(end);
            }
            
            j -= 1;
        }
        
        i -= 1;
    }
    
    return nums.sort((a,b) => a-b);
};

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(nextPermutation([1,2,3]));
console.log(nextPermutation([3,2,1]));