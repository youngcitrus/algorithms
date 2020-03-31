class LinkedList {
    constructor(value){
      this.value = value;
      this.next = null;
    } 
  }
  
  function loopDetection(head) {
    const visited = [];
    let current = head;
    while (current) {
      if (visited.includes(current)) {
        return current;
      }
      visited.push(current);
      current = current.next;
    }
    return false;
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
  
  
  
  console.log(loopDetection(a));