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
  
  function sumList(list1, list2) {
    const array1 = [];
    const array2 = [];
    let current = list1;
    while (current) {
      array1.push(current.value);
      current = current.next;
    } 
    current = list2;
    while (current) {
      array2.push(current.value);
      current = current.next;
    }
  
    const sum = arrayToNumber(array1) + arrayToNumber(array2);
    return buildList(sum);
    
  }
  
  function arrayToNumber(array) {
    let sum = 0;
    let powerOfTen = 1;
    for (let i=0; i<array.length; i++) {
      sum += array[i] * powerOfTen;
      powerOfTen *= 10;
    }
    return sum;
  }
  
  function numberToArray(number) {
    const digits = [];
    while (number > 0) {
      digits.push(number % 10);
      number = Math.floor(number/10);
    }
    return digits;
  }
  
  function buildList(number) {
    const digits = numberToArray(number);
    const head = new LinkedList(digits[0]);
    let current = head;
  
    for (let i=1; i < digits.length; i++) {
      current.next = new LinkedList(digits[i]);
      current = current.next;
    }
  
    return head;
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