
class Solution {
    lowerBound(arr, target) {
        // code here
        let s=0;
    let e= arr.length-1
    let m=Math.floor((s+e)/2);
    let minIndex = Number.MAX_SAFE_INTEGER
    while(s<=e){
        if(arr[m]>=target){
             minIndex= Math.min(minIndex,m)
            e=m-1;
        }else{
            s= m+1
        }
        m=Math.floor((s+e)/2)

    }
    
    return minIndex!=Number.MAX_SAFE_INTEGER?minIndex: arr.length
        
    }
}