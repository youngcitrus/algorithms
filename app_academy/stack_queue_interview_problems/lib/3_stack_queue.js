// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.length = 0;
        this.top = null;
        this.bottom = null;
    }

    push(newNode) {
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length += 1;
        return this.length;
    }

    pop() {
        if (this.length === 0) return null;
        let temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        temp.next = null;
        this.length -= 1;
        return temp;
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.front = null;
        this.back = null;
        this.inStack = new Stack();
        this.outStack = new Stack();
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (!this.front) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }

        this.inStack.push(new Node(newNode.value));
        return this.size();
    }

    dequeue() {
        if (!this.front) return null;
        else if (this.size() === 1) {
            this.front = null;
            this.back = null;
        }
        else {
            this.front = this.front.next;
        }

        if (this.outStack.size() === 0) {
            while(this.inStack.size() > 0) {
                this.outStack.push(this.inStack.pop())
            }
        }

        let x = this.outStack.pop();
        return x;
    }

    size() {
        return this.inStack.size() + this.outStack.size();
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
