// User function Template for javascript
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

class Solution {
    // Function to find pairs in the linked list with the given sum
    findPairsWithGivenSum(head, target) {
        // code here
        let array = []
         if (!head || !head.next) return array;


        let firstEl= head
        let temp= head
        while(temp.next){
            temp= temp.next
        }
        let lastEl= temp
        while(lastEl!==firstEl&&lastEl.next !== firstEl){
            
            if(lastEl.data+firstEl.data=== target){
                array.push([firstEl.data,lastEl.data])
                firstEl= firstEl.next
                lastEl= lastEl.prev
            }else if(lastEl.data+firstEl.data> target){
                lastEl= lastEl.prev
            }else
            firstEl= firstEl.next
        }
        
        return array
        
    }
}