// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.length = 0;
        this.front = null
        this.back = null;
    }

    enqueue(value) {
        let newNode = new Node(value)
        if (!this.front) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.length += 1;
        return this.length;
    }

    dequeue() {
        if (this.length === 0) return null;

        let removedNode = this.front;
        if (this.front === this.back) {
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next;
        }
        removedNode.next = null;
        this.length -= 1;
        return removedNode.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;