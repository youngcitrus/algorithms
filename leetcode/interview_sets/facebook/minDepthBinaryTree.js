//iteratively

var minDepth = function(root) {
    
    if (!root) return 0;
    let queue = [root];
    let minLevel = Infinity;
    let level = 0;
    while(queue.length) {
        let length = queue.length;
        level += 1;
        for (let i=0; i<length; i++) {
            let current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            if (!current.left && !current.right) {

                minLevel = level < minLevel ? level : minLevel;
            }
        }
    }
    return minLevel;
};

// recursive
var minDepth = function(root) {
    if (!root) return 0;
    return minDepthHelper(root);
};

function minDepthHelper(root, level=1) {
    if (!root) return Infinity;
    let leftMin = minDepthHelper(root.left, level + 1);
    let rightMin = minDepthHelper(root.right, level + 1);
    if (!root.left && !root.right) return Math.min(level, leftMin, rightMin);
    else return Math.min(leftMin, rightMin);
}
