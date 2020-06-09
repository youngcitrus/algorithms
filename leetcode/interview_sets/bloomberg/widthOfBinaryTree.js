var widthOfBinaryTree = function(root) {
    if (!root) return 0;
    let maxWidth = 1
    let queue = [root];
    
    while (queue.length) {
        
        let length = queue.length;
        let nextLevel = [];
        
        for (let i=0; i<length; i++) {
            let current = queue.shift();
            
            if (current === 'empty') {
                nextLevel.push('empty');
                nextLevel.push('empty');
                continue;
            }
            
            if (current.left) nextLevel.push(current.left);
            else nextLevel.push('empty');
            
            if (current.right) nextLevel.push(current.right);
            else nextLevel.push('empty');
            
        }
        
        
        let leftMost;
        for (let i=0; i<nextLevel.length; i++) {
             if (nextLevel[i] !== 'empty') {
                leftMost = i;
                break;
            }
        }
        
        if (leftMost === undefined) break;
        
        let rightMost;
        for (let i=nextLevel.length - 1; i>=0; i--) {
            if (nextLevel[i] !== 'empty') {
                rightMost = i;
                break
            }
        }
        
        let width = rightMost - leftMost + 1;
        maxWidth = Math.max(maxWidth, width);
        queue = nextLevel;
    }
    
    return maxWidth;
    
};

//better but missing one test case

var widthOfBinaryTree = function(root) {
    if (!root) return 0;
    let maxWidth = 1
    let queue = [[root,0]];
    
    while (queue.length) {
        
        let length = queue.length;
        let positions = [];
        
        for (let i=0; i<length; i++) {
            let [current, pos] = queue.shift();
            positions.push(pos)
            if (current.left) queue.push([current.left, pos*2]);
            if (current.right) queue.push([current.right, pos*2 + 1]);
        }
        
        if (nextLevel.length === 0) break;
        let width = positions[positions.length - 1] - positions[0] + 1;
        maxWidth = Math.max(maxWidth, width);
        queue = nextLevel;
        // console.log(nextLevel)
    }
    
    return maxWidth;
    
};

// passes all test cases

var widthOfBinaryTree = function(root) {
    let maxWidth = 0
    const queue = [{ node: root, pos: 0 }]
    
    while (queue.length) {
        let len = queue.length
        const positions = []

        while (len--) {
            const { node, pos } = queue.shift()
            
            positions.push(pos)
            
            if (node.left) {
                queue.push({
                    node: node.left,
                    pos: 2 * pos
                })
            }
            
            if (node.right) {
                queue.push({
                    node: node.right,
                    pos: 2 * pos + 1
                })
            }
        }
        
        const levelWidth = positions.length === 1 ? 1 : positions[positions.length - 1] - positions[0] + 1
        maxWidth = Math.max(maxWidth, levelWidth)
    }
    
    return maxWidth
    
};