// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
      
  }
  
  function removeKthNodeFromEnd(head, k) {
    // Write your code here.
      let first = head;
      let second = head;
      for (let i=0; i<k; i++){
          second = second.next;
      }
      if (second === null) {
          head.value = head.next.value;
          head.next = head.next.next;
          return
      }
      while (second.next !== null){
          first = first.next;
          second = second.next;
      }
      first.next = first.next.next;
  }
  
  // Do not edit the line below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
  