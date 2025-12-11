// Node class
class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

class myQueue {
    constructor() {
        // Initialize your data members
        this.start = null;
        this.end = null;
        this.count = 0
    }

    isEmpty() {
        // Return true if queue is empty, else false
        if (this.start === null && this.end == null) {
            return true
        }
        return false
    }

    enqueue(x) {
        // Add element x to rear of queue
        let temp = new Node(x)
        if (this.isEmpty()) {
            this.start = temp
            this.end = temp
            this.count++
        }
        else {
            this.end.next = temp
            this.end = temp
            this.count++
        }
    }

    dequeue() {
        // Remove front element
        if (this.isEmpty()) return -1;
        else {
            let temp = this.start
            this.start = this.start.next
            if (this.start === null) {
                this.end = null;
            }
            this.count--;
        }
    }

    getFront() {
        // Return front element; return -1 if empty

        if (this.isEmpty()) return -1;
        else {
            return this.start.data
        }
    }

    size() {
        // Return current size of the queue
        return this.count

    }
}
