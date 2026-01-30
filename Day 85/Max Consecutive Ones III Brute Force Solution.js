/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxlength =0;
    for(let i=0; i<nums.length; i++){
         let countOfZero=0;
       for(let j=i; j<nums.length; j++){
        if(nums[j]==0){
            countOfZero++
        }
        if(countOfZero>k){
            break;
        }
        maxlength= Math.max(maxlength, j-i+1)
        }
    }
  
return maxlength
};