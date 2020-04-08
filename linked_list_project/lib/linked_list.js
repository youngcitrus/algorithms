// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        if (this.length === 0){
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new Node(val);
            this.tail = current.next;
        }
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        let removedNode;

        if (this.head === this.tail) {
            this.tail = removedNode;
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }

            removedNode = current.next;
            this.tail = current;
            current.next = null;
        }
        
        this.length -= 1;
        return removedNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        if (this.length === 0) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            let oldHead = this.head;
            this.head = new Node(val);
            this.head.next = oldHead;
        }
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0 || this.head === this.tail) {
            return this.removeTail();
        } else {
            let oldHead = this.head;
            this.head = this.head.next;
            // oldHead.next = null;
            this.length -= 1;
            return oldHead;
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        let current = this.head;
        while (current !== null) {
            if (current.value === target) return true;
            current = current.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let current = this.head;
        for (let i=0; i<index; i++) {
            current = current.next;
            if (current === null) return null;
        }
        return current;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.value = val;
            return true;
        } else {
            return false;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length) return false;

        if (index === 0) {
            this.addToHead(val);
            return true;
        }
        if (index === this.length) {
            this.addToTail(val);
            return false;
        }
        let current = this.head;
        for (let i=0; i<index-1; i++) {
            current = current.next;
            // if (current === null) return false;
        }
        const newNode = new Node(val);
        newNode.next = current.next;
        current.next = newNode;
        this.length += 1;
        return true;

    }

    // TODO: Implement the remove method here
    remove(index) {
        
        if (index >= this.length) return undefined;
        if (index === 0) {
            return this.removeHead();
        }
        if (index === this.length - 1) {
            return this.removeTail();
        }
        

        let current = this.head;
        for (let i=0; i<index-1; i++) {
            current = current.next;
        }
        let removeNode = current.next;
        current.next = current.next.next;
        // removeNode.next = null;
        this.length -= 1;
        return removeNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
