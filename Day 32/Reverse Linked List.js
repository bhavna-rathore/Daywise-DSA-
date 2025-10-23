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
var reverseList = function (head) {
    let temp = head;
    let prev = null

    while (temp !== null) {

        let nextEl = temp.next
        temp.next = prev;
        //   console.log(temp?.val,prev?.val, nextEl?.val ,"]")
        prev = temp
        temp = nextEl
    }
    return prev
};