var largestValues = function(root) {
    if (!root) return [];
    const maxes = [root.val]
    const queue = [root];
    while (queue.length) {
        let levelNodes = [];
        let currentLength = queue.length;
        for (let i=0; i<currentLength; i++) {
            let current = queue.shift();
            if (current.left) levelNodes.push(current.left);
            if (current.right) levelNodes.push(current.right);
        }
        if (levelNodes.length) {
            let levelValues = levelNodes.map(node=>node.val);
            maxes.push(Math.max(...levelValues));
            queue.push(...levelNodes);    
        }
    }
    return maxes;
};