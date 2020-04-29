var closestValue = function(root, target) {
    let bestDifference = Math.abs(root.val - target);
    let bestValue = root.val;
    let currentDifference = bestDifference;
    let currentValue = bestValue;
    let current = root;
    while (current) {
        currentDifference = Math.abs(current.val - target);
        if (currentDifference < bestDifference) {
            bestDifference = currentDifference;
            bestValue = current.val;
        };
        
        if (target < current.val) {
            current = current.left;
        } else if (target > current.val) {
            current = current.right;
        } else {
            return current.val;
        }
    }
    
    return bestValue;
};