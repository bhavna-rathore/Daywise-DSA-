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
 * @param {Number} x
 * @return {Node}
 */

class Solution {
    delPos(head, x) {
        // code here
        let temp = head
        if (x == 1) {
            if (temp.next !== null) {
                head = temp.next
                temp.next.prev = null
            }
            return head
        }

        let count = 1;

        while (temp !== null && count < x - 1) {
            //  console.log(count, node.data)
            temp = temp.next
            count++;

        }
        if (temp.next !== null) {
            if (temp.next.next !== null) temp.next.next.prev = temp
            temp.next = temp.next.next


        }

        return head


    }
}