var findLHS = function(nums) {
    let maxLength = 0;
    nums.sort((a,b) => (a-b));
    
    let i = 0;
    while (i < nums.length - 1) {
        
        while ((nums[i+1] - nums[i]) !== 1) {
            i += 1;   
            if (i === nums.length - 1) return maxLength;
        };
        
        let left = i;
        let right = i + 1;
        while (left > 0 && (nums[left] === nums[left-1])) {
            left -= 1;
        }
        while (right < nums.length - 1 && (nums[right] === nums[right + 1])) {
            right += 1;
        }
        let currentLength  = right - left + 1;
        maxLength = currentLength > maxLength ? currentLength: maxLength;
        i = right;
        
    }
    return maxLength;
};

/*
With a count variable (messy)
var findLHS = function(nums) {
    let maxLength = 0;
    nums.sort((a,b) => (a-b));
    
    let i = 0;
    let count = 0;
    while (i < nums.length - 1) {
        if (nums[i+1] - nums[i] !== 1) count = 0
        while ((nums[i+1] - nums[i]) !== 1) {
            
            if (nums[i] === nums[i + 1]) count += 1;
            else count = 0;
            i += 1;
            if (i === nums.length - 1) return maxLength;
        };
        
        let right = i + 1;
        let nextCount = 0
        while (right < nums.length - 1 && (nums[right] === nums[right + 1])) {
            nextCount += 1;
            right += 1;
            
        }
        let currentLength  = right - i + count + 1;
        maxLength = currentLength > maxLength ? currentLength: maxLength;
        i = right;
        count = nextCount;
        
    }
    return maxLength;
};

*/