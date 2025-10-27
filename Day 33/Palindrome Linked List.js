/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let array = []
    let slow = head
    let fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let second = slow.next
    function newHeadForSecondLL(newHead) {
        let temp = newHead
        let prev = null
        let newNode = null
        while (temp != null) {
            newNode = temp.next
            temp.next = prev
            prev = temp
            temp = newNode;
        }
        return prev
    }

    newHead = newHeadForSecondLL(second)
    console.log(newHead)
    while (newHead && head) {
        if (newHead.val != head.val) {
            return false
        }
        newHead = newHead.next
        head = head.next
    }

    return true
};