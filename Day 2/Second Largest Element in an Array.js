class Solution {
    getSecondLargest(arr) {
 
       let uniqueElement=[...new Set(arr)]
       uniqueElement.sort((a,b)=>a-b) 
       return  uniqueElement.length >1?uniqueElement[uniqueElement.length-2]:-1
    }
}