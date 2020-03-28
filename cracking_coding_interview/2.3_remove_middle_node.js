const LinkedList = function(value) {
    this.value = value;
    this.next = null;
  };
  
  const printList = function(head) {
    while(head !== null) {
      console.log(head.value);
      head = head.next;
    }
    console.log('done printing');
  };
  
  function deleteMiddleNode(node) {
    if (!node || !node.next) {
      return false;
    }
    node.value = node.next.value;
    node.next = node.next.next;
  }
  
  var a = new LinkedList('a');
  var b = new LinkedList('b');
  var c = new LinkedList('c');
  var d = new LinkedList('d');
  var e = new LinkedList('e');
  var f = new LinkedList('f');
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  
  printList(a);
  deleteMiddleNode(c);
  printList(a);