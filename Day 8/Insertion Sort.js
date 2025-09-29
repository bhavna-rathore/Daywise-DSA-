class Solution {
    insertionSort(arr) {
        // code here
        let n=arr.length
        for(let i=0; i<n; i++){
           let j=i;
           while(j>0 && arr[j-1]>arr[j]){
             [arr[j-1], arr[j]]= [arr[j],arr[j-1]]  
             j--
           }
        }
    }
}