
var missingNumber = function(nums) {
  let xor1 = 0;
  let xor2 = 0;

    for(let i=0; i<nums.length; i++){
       xor1= xor1^nums[i];
       xor2= xor2^(i)
    }
    xor2= xor2^(nums.length)
    return xor1^xor2
};