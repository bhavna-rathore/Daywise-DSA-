
var findMaxConsecutiveOnes = function(nums) {
    let maxcount=0;
    let count=0;

    for(let i=0; i<nums.length;i++){
        if(nums[i]===1){
            count++;
        }else count=0;
        maxcount= Math.max(count,maxcount);
    }
    return maxcount;
    
};