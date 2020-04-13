// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.
//
// ---------- 
// Example 1:
// ----------
// 
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1,list2) should return D 
// as the node of intersection.
// 
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ---------- 
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1, list2) should return null 
// as there is no point of intersection.
// 
//    A → B → C → D
//
//    X → Y → Z
// 
// -----------
// Let's code!
// -----------
function linkedListIntersection(list1, list2) {
  const list1Length = getListLength(list1);
  const list2Length = getListLength(list2);
  // if (list1Length === 0 || list2Length === 0) return null;

  let larger = list1Length > list2Length ? list1 : list2;
  let smaller = list1Length <= list2Length ? list1 : list2;
  let difference = Math.abs(list1Length - list2Length);
  let currentLarger = larger.head;
  let currentSmaller = smaller.head;

  for (let i=0; i<difference; i++) {
    currentLarger = currentLarger.next;
  }
  while (currentLarger !== null && currentSmaller !== null) {
    if (currentLarger === currentSmaller) {
      return currentLarger;

    }
    currentLarger = currentLarger.next;
    currentSmaller = currentSmaller.next;
  }
  return null;
}

function getListLength(list) {
  if (!list.length) return 0;
  let count = 1;
  let current = list.head;
  while (current) {
    count += 1;
    current = current.next;
  }
  return count;
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
