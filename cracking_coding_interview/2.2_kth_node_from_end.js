
const linkedList = function(value) {
    this.value = value;
    this.next = null;
  };
  
  const findKthToLast = function(k, head) {
    let first = head;
    let second = head;
  
    for (let i = 0; i < k; i++) {
      if (!first) return false;
      first = first.next;
    }
    while (first) {
      first = first.next;
      second = second.next;
    }
    return second;
  
  };
  
  var a = new linkedList('1');
  var b = new linkedList('2');
  var c = new linkedList('3');
  var d = new linkedList('4');
  var e = new linkedList('5');
  var f = new linkedList('6');
  var g = new linkedList('7');
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;
  
  findKthToLast(3, a);
  
  findKthToLast(10, a);
  
  findKthToLast(-1, a);
  
  findKthToLast(0, a);
  
  findKthToLast(1, a);