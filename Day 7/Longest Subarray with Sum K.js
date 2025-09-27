class Solution {
    longestSubarray(arr, k) {
        // code here
        let maxlength=0;
        let map=new Map();
        let sum=0;
        let n= arr.length;
        for(let i=0; i<n; i++){
           sum = arr[i] + sum ;
           if(sum === k){
               maxlength = i+1      
           }
           if(map.has(sum-k)){
               let pev = map.get(sum-k) 
               maxlength = Math.max(maxlength,i-pev)
           }
           if(!map.has(sum)){
               map.set(sum, i)
           }
            
        }
        return maxlength
    }
}