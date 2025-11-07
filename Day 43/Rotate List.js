/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next || k == 0) return head

    let temp = head;
    let count = 1;
    while (temp.next) {
        count++;
        temp = temp.next
    }
    k = k % count;
    if (k === 0) return head;
    let newTail = head

    for (let i = 0; i < count - k - 1; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail?.next
    if (newTail) newTail.next = null
    temp.next = head;

    return newHead

};