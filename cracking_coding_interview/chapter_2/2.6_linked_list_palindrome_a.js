class ListNode {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
function palindrome(head) {
    let current = head;
    let string = "";
    while (current) {
        string += current.value.toString();
        current = current.next;
    }

    return string === string.split("").reverse().join("");
}
  
  const a = new ListNode(2);
  const b = new ListNode(1);
  const c = new ListNode(2);
  const d = new ListNode(2);
  const e = new ListNode(1);
  const f = new ListNode(2);
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  
  console.log(palindrome(a));