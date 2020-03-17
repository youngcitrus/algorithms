var maxArea = function(height) {
    
    let maxArea = -Infinity;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const smaller = height[left] < height[right] ? height[left] : height[right];
        const area = smaller * (right - left)
        if (area > maxArea) maxArea = area;
        if (height[left] < height[right]) left++;
        else right --;
    }
    return maxArea;
};