const copyRandomList = function(head) {
    if (!head) return null;
    const headCopy = new Node(head.val);
    headCopy.random = findNodeIndex(head, head.random);
    let prev = headCopy;
    const nodeHash = {0: headCopy};
    let current = head.next;
    let index = 1;
    while (current) {
        const newNode = new Node(current.val);
        prev.next = newNode;
        newNode.random = findNodeIndex(head, current.random);
        nodeHash[index] = newNode;
        prev = newNode;
        current = current.next;
        index += 1;
    }
    
    current = headCopy;
    while (current) {
        if (current.random !== null) {
            current.random = nodeHash[current.random];
        }
        current = current.next;
    }
    return headCopy;
};

function findNodeIndex(head, targetNode) {
    if (targetNode === null) return null;
    let current = head;
    let index = 0;
    while (current) {
        if (current === targetNode) {
            return index;
        }
        index += 1;
        current = current.next;
    }
    return -1;
}

//O(n^2) time, O(n) space