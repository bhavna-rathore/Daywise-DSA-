// User function Template for javascript

/*
  class Node {
    constructor(val) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }
}

integer key
head node head_ref
return head node

*/

class Solution {

    deleteAllOccurOfX(head_ref, key) {
        // Code for deleting all occurrences of key in the linked list goes here
        if (!head_ref) return null
        while (head_ref && head_ref.data === key) {
            head_ref = head_ref.next;
            if (head_ref) head_ref.prev = null;
        }

        let temp = head_ref


        while (temp) {
            if (temp.data === key) {
                if (temp.prev) temp.prev.next = temp.next
                if (temp.next) temp.next.prev = temp.prev

            }
            temp = temp.next
        }
        return head_ref
    }

}