/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let s=0;
    let e= nums.length-1
    let m=Math.floor((s+e)/2);
    while(s<=e){
        console.log(s,e,m,'-')
        if(nums[m]===target){
            return m
        }else if(nums[m]>target){
            e=m-1;
        }else{
            s= m+1
        }
        m=Math.floor((s+e)/2)

    }
    return -1
    
};