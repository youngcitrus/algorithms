class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function printList(node) {
    while (node) {
      console.log(node.value);
      node = node.next;
    }
    return;
  }
  
  function partition(listNode, val) {
    let head = listNode;
    let tail = listNode;
  
    while (listNode) {
      let next = listNode.next;
      if (listNode.value < val) {
        listNode.next = head;
        head = listNode;
      } else {
        tail.next = listNode;
        tail = listNode;
      }
      listNode = next;
    }
    tail.next = null;
    return head;
  }
  
  const a = new LinkedList(3);
  const b = new LinkedList(5);
  const c = new LinkedList(8);
  const d = new LinkedList(5);
  const e = new LinkedList(10);
  const f = new LinkedList(2);
  const g = new LinkedList(1);
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;
  
  printList(partition(a, 5));
  