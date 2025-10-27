/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
} */

/**
 * @param {Node} head
 * @returns {Node}
 */

class Solution {
    segregate(head) {
       let count= [0,0,0]
       let temp=head
        
        while(temp){
            if(temp.data==0){
                count[0]++
            }
            else if(temp.data==1){
                count[1]++
            }else{
                count[2]++
            }
            temp= temp.next
        }
        // console.log(count[1], count[0], count[2])
         temp=head
        while(temp){
           
            if(count[0]!=0){
                temp.data= 0
                 count[0]--
                temp= temp.next
               
                
            }else if(count[1]!=0){
                temp.data= 1;
                count[1]--
                temp= temp.next
                
                
            }else{
                   temp.data= 2;
                   count[2]--
                temp= temp.next 
                
                }
        }
        return head
       
        
    }
}