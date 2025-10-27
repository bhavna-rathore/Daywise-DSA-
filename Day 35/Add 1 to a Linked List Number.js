/**
 * @param {Node} node
 * @return {Node} node
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    addOne(node) {
        // your code here
        
        function reverse(node){
            let prev = null;
            let temp =node
            while(temp){
                let next= temp.next
                temp.next= prev
                prev= temp
                temp=next
            }
            return prev
        }
        let rotatednode = reverse(node)
        let carry=1
       let temp=rotatednode
       let prev =null
        while (temp) {
            let sum = temp.data + carry;
            temp.data = sum % 10;
            carry = Math.floor(sum / 10);
            prev = temp;
            temp = temp.next;
        }

        // Step 3: If carry is still left, add a new node
        if (carry > 0) {
            prev.next = new Node(carry);
        }

        return reverse(rotatednode)
        
    }
}