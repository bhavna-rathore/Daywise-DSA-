/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cap = capacity;
    this.map = new Map();
    // intial head and tail
    this.head = { prev: null, next: null };
    this.tail = { prev: null, next: null };

    this.head.next = this.tail;
    this.tail.prev = this.head;
};
LRUCache.prototype.addNode = function (node) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
};

// remove node from list
LRUCache.prototype.deleteNode = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.m.has(key)) {
        let node = this.m.get(key)
        let res = node.val
        // this.m.delete(key);
        // this.deleteNode(resNode);
        // this.addNode(resNode);
        // this.m.set(key, this.head.next);
        return res;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

// move node to head
LRUCache.prototype.moveToHead = function (node) {
    this.deleteNode(node);
    this.addNode(node);
};

LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;

    let node = this.map.get(key);
    this.moveToHead(node);
    return node.val;
};

LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        node.val = value;
        this.moveToHead(node);
        return;
    }

    let newNode = { key, val: value, prev: null, next: null };
    this.map.set(key, newNode);
    this.addNode(newNode);

    if (this.map.size > this.cap) {
        let node1 = this.tail.prev;
        this.deleteNode(node1);
        this.map.delete(node1.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */