/*
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
    this.bottom = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {Node}
 */

class Solution {
    merge(head1, head2) {
        let dummy = new Node(-1)
        let tail = dummy

        while (head1 && head2) {
            if (head1.data <= head2.data) {
                tail.bottom = head1
                head1 = head1.bottom
            } else {
                tail.bottom = head2
                head2 = head2.bottom
            }
            tail = tail.bottom;
        }
        while (head1) {
            tail.bottom = head1
            head1 = head1.bottom
            tail = tail.bottom;
        } while (head2) {
            tail.bottom = head2
            head2 = head2.bottom
            tail = tail.bottom;
        }
        return dummy.bottom
    }
    flatten(root) {
        // code here
        if (!root || !root.next) {
            return root
        }
        // console.log(root, root.next)
        root.next = this.flatten(root.next)
        root = this.merge(root, root.next)
        return root
    }
}