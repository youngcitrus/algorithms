class LinkedList {
    constructor(value){
      this.value = value;
      this.next = null;
    } 
  }
  
  function intersection(head1, head2) {
    let result1 = getTailandSize(head1);
    let result2 = getTailandSize(head2);
    
    if (result1.tail !== result2.tail) {
      return false;
    }
  
    let shorter = result1.size < result2.size ? head1 : head2;
    let longer = result1.size < result2.size ? head2 : head1;
    const difference = Math.abs(result1.size - result2.size);
    for (let i=0; i<difference; i++) {
      longer = longer.next;
    }
  
    while (shorter !== longer) {
      shorter = shorter.next;
      longer = longer.next;
    }
    return shorter;
  }
  
  class Result{
    constructor(tail, size) {
      this.tail = tail;
      this.size = size;
    }
  }
  
  function getTailandSize(head) {
    let size = 1;
    let current = head;
    while (current.next !== null) {
      current = current.next;
      size += 1;
    }
    return new Result(current, size);
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
  const d1 = new LinkedList('d1');
  
  a1.next = b1;
  b1.next = c1;
  c1.next = e;
  const intersectNode = intersection(a, a1);
  
  console.log(intersectNode);