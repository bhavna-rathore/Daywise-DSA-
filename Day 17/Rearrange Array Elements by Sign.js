 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let res = [];
    let postivepointer = 0;
    let negativepointer = 1;
    for(let i= 0; i<nums.length; i++){
        if(nums[i]>0){
            res[postivepointer] = nums[i];
            postivepointer = postivepointer+2;
        }else{
            res[negativepointer] = nums[i]
            negativepointer+= 2;
        }
    }
    return res;
    
};