/**
 * @param {Node} head
 * @param {Number} p
 * @param {Number} x
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
*/

class Solution {
    insertAtPos(head, p, x) {
        // code here
        if (p < 0) return head;
        let node = new Node(x)

        if (p == 0) {
            node.next = head
            if (head != null) head.prev = node

            return node

        }
        let temp = head
        let count = 0;
        while (temp !== null && count < p) {
            //  console.log(count, node.data)
            temp = temp.next
            count++;

        }
        if (temp === null) {
            return head;
        }


        node.next = temp.next
        node.prev = temp
        if (node.next !== null) {
            node.next.prev = node
        }
        temp.next = node

        return head
    }
}