/**
 * @param {Node} head
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    getCount(head) {
        // Code here
        let count=1;
        while(head.next!==null){
            head= head.next
            count++;
        }
        return count
    }
}