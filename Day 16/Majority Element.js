/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count =0;
  let  n= nums.length;
  let el;
  for(let i=0; i< n; i++){
    if(count===0){
        count++
        el= nums[i]
    }else if(el===nums[i]){
        count++
    }else{
        count--
    }
  }
  let elcount=0
  for(let i=0; i<n; i++){
    if(el===nums[i]){
        elcount++;
    }
  }
  if(elcount>n/2){
    return el
  }else return -1
  

    
};