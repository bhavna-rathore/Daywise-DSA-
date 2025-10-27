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
var deleteMiddle = function (head) {
    let temp = head
    let count = 0;
    while (temp) {
        count++;
        temp = temp.next
    }
    if (count === 1) return null
    let middle = Math.floor(count / 2)
    console.log(count, middle)
    count = 0
    temp = head
    while (temp && count < middle - 1) {
        temp = temp.next
        count++

    }
    temp.next = temp.next.next
    console.log(temp, middle)
    return head

};