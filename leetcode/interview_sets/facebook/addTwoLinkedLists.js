var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let p1 = l1;
    let p2 = l2;
    let curr = dummy;
    let carry = 0;
    
    while (p1 || p2) {
        let val1 = p1 ? p1.val : 0;
        let val2 = p2 ? p2.val : 0;
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
    }
    
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    
    return dummy.next;
}