class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function partition(listNode, val) {
    let partOneStart = null;
    let partOneEnd = null;
    let partTwoStart = null;
    let partTwoEnd = null;
  
    let current = listNode;
  
    while (current) {
      let next = current.next;
      current.next = null;
      if (current.value < val) {
        if (partOneStart === null) {
          partOneStart = current;
          partOneEnd = current;
        } else {
          partOneEnd.next = current;
          partOneEnd = current;
        }
      } else {
        if (partTwoStart === null) {
          partTwoStart = current;
          partTwoEnd = current;
        } else {
          partTwoEnd.next = current;
          partTwoEnd = current;
        }
      }
      current = next;
    }
    partOneEnd.next = partTwoStart;
    return partOneStart;
  }
  
  const a = new LinkedList(3);
  const b = new LinkedList(5);
  const c = new LinkedList(8);
  const d = new LinkedList(5);
  const e = new LinkedList(10);
  const f = new LinkedList(2);
  const g = new LinkedList(1);
  
  const printList = function(a) {
    while (a !== null) {
      console.log(a.value);
      a = a.next;
    }
  };
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;
  
  const newa = partition(a, 5);
  printList(newa);