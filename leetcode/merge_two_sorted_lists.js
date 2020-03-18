// Building a new list
var mergeTwoLists = function(l1, l2) {
    let current1 = l1;
    let current2 = l2;
    let result = new ListNode(null);
    let start = result;
    
    while (current1 !== null && current2 !== null) {
        if (current1.val < current2.val) {
            result.next = new ListNode(current1.val);
            current1 = current1.next;
            result = result.next;
        } else {
            result.next = new ListNode(current2.val);
            current2 = current2.next;
            result = result.next;
        }
    }
    if (current1 === null) {
        result.next = current2;
    } else {
        result.next = current1;
    }
    
    return start.next;
};

// build in place

var mergeTwoLists = function(l1, l2) {
    let current1 = l1;
     let current2 = l2;
     let result = new ListNode(null);
     let start = result;
     
     while (current1 !== null && current2 !== null) {
         if (current1.val < current2.val) {
             result.next = current1;
             current1 = current1.next;
             result = result.next;
         } else {
             result.next = current2;
             current2 = current2.next;
             result = result.next;
         }
     }
     if (current1 === null) {
         result.next = current2;
     } else {
         result.next = current1;
     }
     
     return start.next;
 };
