var rotate = function(nums, k) {
    
    let index=  k %  nums.length 
 console.log(index)
    let rotated = nums.slice(-index).concat(nums.slice(0,nums.length-index));

    // Copy back into nums (in-place)
    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotated[i];
    }
};