// var maxDepth = function(root) {
//     if (!root) return 0;
//     const queue = [root];
//     depth = 0
//     while (queue.length > 0) {
//         let length = queue.length;
//         for (let i=0; i<length; i++) {
//             let current = queue.shift()
//             if (current.left) queue.push(current.left)
//             if (current.right) queue.push(current.right)
//         }
//         depth += 1
//     }
//     return depth;
// };

function maxDepth(root) {
    if (!root) return 0;
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    return Math.max(leftMax, rightMax) + 1
}