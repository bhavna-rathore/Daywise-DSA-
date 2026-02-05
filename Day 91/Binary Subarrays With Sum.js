/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let n= nums.length 
    let count=0
    for(let i=0; i<n; i++){
        let sum=0;
        for(let j=i; j<n; j++){
            sum+=nums[j]
            if(sum===goal){
                count++
            }
            
        }
    }
    return count
    
};