class LinkedList {
    constructor(value){
      this.value = value;
      this.next = null;
    } 
  }
  
  function intersection(head1, head2) {
    let stack1 = [];
    let current1 = head1;
  
    while (current1) {
      stack1.push(current1);
      current1 = current1.next;
    }
  
    let current2 = head2;
    let stack2 = [];
  
    while (current2) {
      stack2.push(current2);
      current2 = current2.next;
    }
  
    let top1 = stack1.pop();
    let top2 = stack2.pop();
    if (top1 !== top2) return false;
  
    while (true){
      let prev = top1;
      top1 = stack1.pop();
      top2 = stack2.pop();
      if (top1 !== top2) {
        return prev;
      }
    }
  }
  
  
  const a = new LinkedList('a');
  const b = new LinkedList('b');
  const c = new LinkedList('c');
  const d = new LinkedList('d');
  const e = new LinkedList('e');
  const f = new LinkedList('f');
  const g = new LinkedList('g');
  const h = new LinkedList('h');
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;
  g.next = h;
  
  const a1 = new LinkedList('a1');
  const b1 = new LinkedList('b1');
  const c1 = new LinkedList('c1');
  
  a1.next = b1;
  b1.next = c1;
  c1.next = d;
  const intersectNode = intersection(a, a1);
  
  console.log(intersectNode);