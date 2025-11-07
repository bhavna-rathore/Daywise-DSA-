/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (!head) return head
    // create copy node and insert in between the nodes
    let temp = head
    while (temp) {
        const node = new Node(temp.val, temp.next, null)
        temp.next = node
        temp = node.next


    }
    // assign the random pointer

    temp = head
    while (temp) {
        const node = temp.next

        if (temp.random) {
            node.random = temp.random.next
        }
        temp = node.next

    }
    // separate the lists
    let newHead = head.next;
    temp = head
    while (temp) {
        const node = temp.next
        temp.next = node.next
        if (node.next) {
            node.next = node.next.next
        }
        temp = temp.next

    }
    return newHead
};