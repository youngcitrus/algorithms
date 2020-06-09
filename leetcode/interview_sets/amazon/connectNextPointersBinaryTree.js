// BFS approach

var connect = function(root) {
    if (!root) return null;
    const queue = [root];
    while (queue.length) {
        let length = queue.length;
        for (let i=0; i<length; i++) {
            let current = queue.shift();
            if (i !== length - 1) {
                current.next = queue[0];    
            };
            
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
    return root;
};

// linked list approach

var connect = function(root) {
    if (root === null) {
        return root;
    }
    
    let leftMost = root;
    while (leftMost.left !== null) {
        let head = leftMost;
        while (head !== null) {
            head.left.next = head.right;
            
            if (head.next !== null) {
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        leftMost = leftMost.left;
    }
    return root;
};