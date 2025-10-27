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
var sortList = function (head) {
    if (!head || !head.next) return head
    function middleNode(head) {
        let slow = head
        let fast = head
        while (fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    function mergeLeftAndRight(left, right) {
        let dummyNode = new ListNode(-1);
        let temp = dummyNode;
        console.log(left, right)
        while (left && right) {
            console.log(left.val, right.val)
            if (left.val <= right.val) {
                temp.next = left
                temp = left
                left = left.next
            } else {
                temp.next = right
                temp = right
                right = right.next
            }
        }

        temp.next = left || right
        return dummyNode.next
    }

    let middle = middleNode(head)
    let right = middle.next
    middle.next = null
    let left = head
    left = sortList(left)
    right = sortList(right)

    return mergeLeftAndRight(left, right)

};