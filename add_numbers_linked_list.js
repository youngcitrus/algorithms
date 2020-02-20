const addTwoNumbers = function(l1, l2) {
    let res = new ListNode(null);
    let cur = res;
    let remainder = 0;
    while(l1 || l2){
        cur.next = new ListNode(null)
        cur = cur.next;
        let left = l1 ? l1.val : 0;
        let right = l2 ? l2.val : 0;
        let sum = left + right + remainder;
        if(sum >= 10){
            remainder = 1;
            cur.val = sum % 10;
        }
        else{
            remainder = 0;
            cur.val = sum;
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if(remainder === 1) cur.next = new ListNode(1);
    
    return res.next;
};