/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let maxCount =0;
    let persum=0;
    let map= new Map();

    map.set(0, 1)
       for(let i=0; i<nums.length; i++){
       persum= persum+nums[i];
       let remove=persum-k
       if(map.has(remove)){
        maxCount+=map.get(remove)
       }
       console.log(maxCount,remove, persum)
       map.set(persum,(map.get(persum)||0)+1)
        
    }
return maxCount;
    
};