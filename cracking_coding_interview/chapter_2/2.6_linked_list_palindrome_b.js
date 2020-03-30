class ListNode {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  
  function palindrome(head) {
    let slow = head;
    let fast = head;
    const stack = [];
  
    while (fast !== null && fast.next !== null) {
      stack.push(slow.value);
      slow = slow.next;
      fast = fast.next.next;
    }
  
    if (fast !== null) {
      slow = slow.next;
    }
  
    while (slow !== null) {
      let top = stack.pop();
      if (top !== slow.value) {
        return false;
      }
      slow = slow.next;
    }
  
    return true;
  
  }
  
  const a = new ListNode(3);
  const b = new ListNode(1);
  const c = new ListNode(2);
  const d = new ListNode(8);
  const e = new ListNode(2);
  const f = new ListNode(1);
  const g = new ListNode(3);
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;
  
  console.log(palindrome(a));