class LinkedList {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  const printList = function(head) {
    while (head !== null) {
      console.log(head.value);
      head = head.next;
    }
  };
  
  function sumList(node1, node2, carry=0) {
    if(!node1 && !node2 && carry===0){
      return null
    }
    let value = carry
    value += node1 ? node1.value : 0
    value += node2 ? node2.value : 0
    const node  = new LinkedList(value%10)
    node.next = sumList(
      node1 ? node1.next : null,
      node2 ? node2.next : null,
      value > 10 ? 1 : 0)
    return node
  }
  
  
  const a = new LinkedList(7);
  const b = new LinkedList(1);
  const c = new LinkedList(6);
  
  a.next = b;
  b.next = c;
  
  const d = new LinkedList(5);
  const e = new LinkedList(9);
  const f = new LinkedList(2);
  
  d.next = e;
  e.next = f;
  
  const newHead = sumList(a, d);
  printList(newHead);