// Node class
/* class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
} */

class myStack {
    constructor() {
        // Initialize your data members
        this.top = null;
        this.count = 0
    }

    isEmpty() {
        // check if the stack is empty
        return this.top != null ? false : true


    }

    push(x) {
        // Adds an element x at the top of the stack
        let newNode = new Node(x)
        newNode.next = this.top
        this.top = newNode

        this.count++;

    }

    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        let val = this.top.data;
        this.top = this.top.next;
        this.count--;
        return val;

        // Removes an element from the top of the stack
    }

    peek() {
        if (this.isEmpty()) {   
            // console.log("Stack is empty");
            return -1;
        }

        return this.top.data;

    }

    size() {
        // Returns the current size of the stack
        return this.count
    }
}