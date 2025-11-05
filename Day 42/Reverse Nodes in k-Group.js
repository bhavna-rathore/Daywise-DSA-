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
var reverseKGroup = function (head, k) {
    if (!head || k == 1) return head

    let count = 0;
    let curr = head

    while (curr) {
        count++;
        curr = curr.next

    }

    let dummy = new ListNode(0);
    dummy.next = head
    let prevGroupEnd = dummy

    while(count>=k){
        let groupStart = prevGroupEnd.next
        let curr= groupStart.next

            for (let i = 1; i < k; i++) {
            groupStart.next = curr.next;
            curr.next = prevGroupEnd.next;
            prevGroupEnd.next = curr;
            curr = groupStart.next;
        }
       prevGroupEnd = groupStart;
        count -= k;


    }
    return dummy.next
};