// https://leetcode.com/problems/clone-graph/solution/

var cloneGraph = function(node) {
    if (!node) return node;
    const visited = new Map();
    const head = new Node(node.val)
    visited.set(node, head);
    
    const queue = [node];
    
    while (queue.length) {
        let current = queue.shift();
       
        current.neighbors.forEach(neighbor => {
            
            if (!(visited.has(neighbor))) {
                visited.set(neighbor,new Node(neighbor.val));
                queue.push(neighbor);
                
            }
            visited.get(current).neighbors.push(visited.get(neighbor));
        });
    }

    return head;
};