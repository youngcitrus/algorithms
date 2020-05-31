// Approach 1
var mergeKLists = function(lists) {
    const allValues = [];
    lists.forEach(list => {
        while (list) {
            allValues.push(list.val);
            list = list.next;
        }
    })
    allValues.sort((a,b) => a - b);
    
    let dummy = new ListNode();
    let curr = dummy;
    allValues.forEach(value => {
        curr.next = new ListNode(value);
        curr = curr.next;
    })
    return dummy.next;
};

// Approach 2
var mergeKLists = function(lists) {
    const k = lists.length;
    let min = lists[0];
    let minIdx = 0;
    
    for (let i = 0; i < k; i++) {
        if (!min || (lists[i] && min.val > lists[i].val)) {
            min = lists[i];
            minIdx = i;
        }
    }
    
    if (!lists[minIdx]) {
        return null;
    }
    console.log(lists)
    lists[minIdx] = lists[minIdx].next;
    min.next = mergeKLists(lists);
    return min;
};

//Approach 3
var mergeKLists = function(lists) {
    if (!lists.length) return null;
    let root = lists[0];
    let k = lists.length;
    for (let i=1; i<k; i++) {
        root = mergeTwoLists(root, lists[i]);
    } 
    return root;
};

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let prev = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    if (!l1) {
        prev.next = l2;
    } else {
        prev.next = l1;
    }
    return dummy.next;
}