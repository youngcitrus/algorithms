var nextGreaterElement = function(nums1, nums2) {
    const stack = [nums2[0]];
    let resultObj = {};
    for (let i=1; i<nums2.length; i++) {
        while (stack.length && nums2[i] > stack[stack.length - 1]) {
           resultObj[stack.pop()] = nums2[i];
        }
        stack.push(nums2[i]); 
    }
    
    while (stack.length) {
        resultObj[stack.pop()] = -1;
    }
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        result[i] = resultObj[nums1[i]];
    }
    return result;
};

//brute force
var nextGreaterElement = function(nums1, nums2) {
    const output = [];
    nums1.forEach(num => {
       output.push(nextGreater(num, nums2)); 
    });
    return output;
};

function nextGreater(num, array) {
    
    let result = -1;
    let startIdx = array.indexOf(num) + 1;
    
    while (startIdx < array.length) {
        if (array[startIdx] > num) {
            result = array[startIdx];
            break;
        }
        startIdx += 1;
    }
    return result;
}