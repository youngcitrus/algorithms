var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;
    
    let newHead = new ListNode('new head', head);
    let current = head;
    let previous = newHead;
    while (current) {
        while(current && current.next && current.val === current.next.val) {
            while (current && current.next && current.val === current.next.val) {
                current = current.next;
            }
            current = current.next;
        }
    
        previous.next = current;
        previous = current;
        if (current) current = current.next;
    }
    return newHead.next;
};

// Alternate solution below:
var deleteDuplicates = function(head) {
    const dummy = new ListNode();
    dummy.next = head;
    let node = dummy;                                                  // the last known distinct node
    while (node.next) {
        if (node.next.next && node.next.val === node.next.next.val) {  // if the next two nodes are equal...
            let nonValNode = node.next.next.next;
            while (nonValNode && nonValNode.val === node.next.val) {   // ...find the first one that isn't...
                nonValNode = nonValNode.next;
            }
            node.next = nonValNode;                                    // ...and glue it to the last known distinct node;...
        } else {
            node = node.next;                                          // ...otherwise the next node is distinct
        }
    }
    return dummy.next;
};