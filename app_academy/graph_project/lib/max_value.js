// Without recursion
// function maxValue(node, visited=new Set()) {
//     let max = -Infinity;
//     let queue = [node]
    
//     while (queue.length) {
//         let current = queue.pop();
//         visited.add(current);
//         if (current.val > max) max = current.val;
//         current.neighbors.forEach(neighbor => {
//             if (!visited.has(neighbor)) queue.push(neighbor);
//         })

//     }
//     return max;
// }

// With recursion:
function maxValue(node, visited=new Set()) {
    if (visited.has(node)) return -Infinity;
    visited.add(node);
    let neighborMaxes = node.neighbors.map((neighbor) => maxValue(neighbor, visited));
    return Math.max(node.val, ...neighborMaxes);
}

module.exports = {
    maxValue
};