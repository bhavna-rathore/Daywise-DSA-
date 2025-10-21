/**
 * @param {Node} head
 * @param {number} x
 * @returns {Node}

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    insertAtEnd(head, x) {
        // code here
            const newNode = new Node(x);

        // If list is empty
        if (head === null) {
            return newNode;
        }

        let temp =head
        
        while(temp.next!==null){
            temp=temp.next
        }
        temp.next=newNode;

        return head;
        
    }
}