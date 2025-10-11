/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
   
    let num = [...new Set(nums)]
     let n = num.length;
    num.sort((a,b)=>a-b);
    if(n<2){
        return n
    }
    let maxlength = 0;
    let length=1;
    // let d = num[1]-num[0];
    for(let i=1; i < n; i++){
        if(num[i]-num[i-1]==1){
            length++
            }
            else{
                length = 1
                }
                maxlength= Math.max(maxlength,length)
                }
                return maxlength;  
};