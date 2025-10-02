4/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function binarySearch(res, nums, target, s,e ,isRight){
     while(s<=e){
        m = Math.floor((s+e)/2);
        if(nums[m]===target){

            if(isRight){ 
                res[0]= m
                e=m-1
                }
            else{ 
                res[1]= m
                s=m+1
                }
        }else if(nums[m]>target){
            e= m-1;
        }else {
            s = m+1;
            }

    }
 }
var searchRange = function(nums, target) {
    let s = 0;
    let e = nums.length-1;
    // let m = Math.floor((s+e)/2);
    let res = [-1, -1];

    //left iterate of res[0]
    binarySearch(res, nums, target, s,e ,false)  
   // right iterate for the res[1]
    binarySearch(res, nums, target, s,e,true)  
    return res
    
};