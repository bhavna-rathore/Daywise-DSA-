class myStack {
    constructor(n) {
        // Define Data Structures
        this.arry = new Array(n)
        this.top = -1
        this.n = n
    }

    isEmpty() {
        // Check if stack is empty
        return this.top > -1 ? false : true
    }

    isFull() {
        // Check if stack is full
        if (this.top === this.n - 1) return true
        else return false
    }

    push(x) {
        if (this.isFull()) {
            // console.log("Stack Overflow");
            return -1;
        }
        this.top++;
        this.arry[this.top] = x;
    }

    pop() {
        if (this.isEmpty()) {
            // console.log("Stack Underflow");
            return -1;
        }
        this.arry[this.top] = -1;
        this.top--;
    }


    peek() {
        if (this.isEmpty()) {
            // console.log("Stack is empty");
            return -1;
        }
        return this.arry[this.top];
    }

}