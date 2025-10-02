
class Solution {
    upperBound(arr, target) {
        // code here
        let s=0;
        let e= arr.length-1;
        let maxIndex=Number.MIN_SAFE_INTEGER;
        let m = Math.floor((s+e)/2);
        
        while(s<=e){
            if(arr[m]>target){
             maxIndex=m        
             e=m-1
            }else{
               
                s=m+1;
            }
            m = Math.floor((s+e)/2);
        }
        return  maxIndex===Number.MIN_SAFE_INTEGER?arr.length:maxIndex;
        
        
    }
}