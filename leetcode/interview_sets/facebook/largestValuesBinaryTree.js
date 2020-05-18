var largestValues = function(root) {
    if (!root) return [];
    const maxes = [root.val]
    const mainQueue = [[root]];
    while (mainQueue.length) {
        let levelNodes = [];
        let levelQueue = [...mainQueue.shift()];
        while (levelQueue.length) {
            let current = levelQueue.shift();
            if (current.left) levelNodes.push(current.left);
            if (current.right) levelNodes.push(current.right);
        }
        if (levelNodes.length) {
            let levelValues = levelNodes.map(node=>node.val);
            maxes.push(Math.max(...levelValues));
            mainQueue.push(levelNodes);    
        }
    }
    return maxes;
};