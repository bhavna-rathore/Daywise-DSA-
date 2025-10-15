/**
 * @param {Number[]} arr
 * @returns {Number}
 */
class Solution {
    maxLength(arr) {
        // code here
        let n = arr.length
        let map = new Map()
        let sum = 0;
        let maxLength=0;
        let target =0
        
        for(let i=0; i<n; i++){
            
            sum += arr[i]
         
             if(sum==target){
                 maxLength= Math.max(maxLength, i+1)
             }
           // console.log(sum, maxLength)
            if(map.has(sum)){
                maxLength= Math.max(maxLength, i-map.get(sum))
            }else{
                map.set(sum, i)
            }
            
        }
        return maxLength;
    }
}