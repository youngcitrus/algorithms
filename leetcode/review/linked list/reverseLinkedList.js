// https://leetcode.com/problems/reverse-linked-list/

// iterative

var reverseList = function(head) {
    let current = head;
    let prev = null;
    
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

// recursive

function reverseList(head) {
    let newHead = null;
    function reverse(node) {
        if (!node) return null;
        const nextNode = reverse(node.next);
        node.next = null;
        
        if (nextNode) {
            nextNode.next = node;
        } else {
            newHead = node;
        }
        return node;
    }
    
    reverse(head);
    
    return newHead;
    
}


