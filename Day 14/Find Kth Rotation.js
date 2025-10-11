/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    findKRotation(arr) {
        // Code Here
        let s = 0;
        let e = arr.length-1;
        let m = Math.floor((s+e)/2)
        let target=0;
        while(s<=e){
            // console.log(arr[target], m, arr[m],target)
            if(arr[target]>arr[m]){
                target=m
                e=m-1;
            }else{
                s=m+1
            }
             m = Math.floor((s+e)/2)
        }
          return target;
    }
  
}
