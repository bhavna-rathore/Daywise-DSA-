/*
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}
*/

/**
 * @param {Node} head
 * @return {Node}
 */

class Solution {
    reverse(head) {
        // code here
        let back = null;
        let temp = head
        while (temp) {
            back = temp.prev

            temp.prev = temp.next
            temp.next = back
            temp = temp.prev

        }
        if (back) {
            head = back.prev
        }
        return head


    }
}