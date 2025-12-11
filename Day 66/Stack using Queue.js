class myStack {
    constructor() { this.q = []; }

    push(x) {
        // Inserts an element x at the top of the stack

        this.q.push(x)
        for (let i = 1; i < this.q.length; i++) {
            this.q.push(this.q.shift())
        }
    }

    pop() {
        // Removes an element from the top of the stack
        if (this.q.length == 0) return -1
        return this.q.shift();

    }

    top() {
        // Returns the top element of the stack
        // If stack is empty, return -1
        if (this.q.length == 0) return -1
        else {
            return this.q[0]
        }
    }

    size() {
        return this.q.length
        // Returns the current size of the stack
    }
}