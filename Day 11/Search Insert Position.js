/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     let s=0;
    let e= nums.length-1
    let m=Math.floor((s+e)/2);
    let minIndex = Number.MAX_SAFE_INTEGER
    while(s<=e){
        if(nums[m]===target){
            return m;
        }
        if(nums[m]>target){
             minIndex= Math.min(minIndex,m)
            e=m-1;
        }else{
            s= m+1
        }
        m=Math.floor((s+e)/2)

    }
    
    return minIndex!=Number.MAX_SAFE_INTEGER?minIndex: nums.length
     
};