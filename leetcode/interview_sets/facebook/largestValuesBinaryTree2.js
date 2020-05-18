var largestValues = function(root) {
    if (!root) return [];
    const maxes = []
    const queue = [root];
    while (queue.length) {
        let levelMax = -Infinity;
        let currentLength = queue.length;
        for (let i=0; i<currentLength; i++) {
            let current = queue.shift();
            levelMax = Math.max(current.val, levelMax)
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        if (levelMax !== -Infinity) {
            maxes.push(levelMax);    
        }
    }
    return maxes;
};