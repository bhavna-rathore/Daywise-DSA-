/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let count = 0;

    let temp = head
    while (temp !== null) {
        count++;
        temp = temp.next
    }
    let mid = Math.floor(count / 2) + 1
    temp = head
    count = 1
    console.log(temp.val, mid)
    while (temp !== null && count < mid) {
        console.log(temp.val, '--')
        temp = temp.next
        count++
        // console.log(temp.val,'--')
    }

    return temp

};