var maxArea = function(height) {
    let start = 0, end = height.length - 1;
    let max = -Infinity;
    while (start < end) {
        let check = Math.min(height[start], height[end]) * (end - start);
        max = max < check ? check : max;
        if (height[start] > height[end]) {
            end -= 1;
        } else {
            start += 1;
        }
    }
    return max;
};

// https://leetcode.com/problems/container-with-most-water/submissions/