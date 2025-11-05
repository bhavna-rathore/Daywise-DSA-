//Back-end complete function Template for JAVASCRIPT

/**
 * Node Class
 * @param {any} data - value stored in node
 * @class
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Solution {
    /**
     * Function to remove duplicates from unsorted linked list.
     * @param {Node} head
     * @returns {Node}
     */
    removeDuplicates(head) {
        // code here
        let prev = null
        let curr = head
        if (!curr) return curr

        while (curr) {

            if (prev && prev.data === curr.data) {
                prev.next = curr.next
                if (curr.next)
                    curr.next.prev = prev
            }
            // console.log(prev?.data, curr.data, count)
            if (!prev || prev?.data !== curr?.next?.data) prev = curr
            curr = curr.next
        }
        return head
        // return head after editing list
    }
}