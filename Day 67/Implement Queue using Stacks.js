
var MyQueue = function () {
    this.st1 = [];
    this.st2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    while (this.st1.length) {
        this.st2.push(this.st1.pop())
    }
    this.st1.push(x)
    while (this.st2.length) {
        this.st1.push(this.st2.pop())
    }

};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.st1.length) {
        return this.st1.pop()
    } else return -1

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.st1.length === 0) return -1;
    return this.st1[this.st1.length - 1]

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.st1.length === 0

};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */