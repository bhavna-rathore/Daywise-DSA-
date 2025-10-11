var nextPermutation = function(nums) {
let n= nums.length
    let index=-1;
    // allPermutation(index, nums , ans,n);

for(let i=n-2; i>=0; i--){
    if(nums[i]<nums[i+1]){
        index=i;
        break
    }
    
}
if(index==-1){
   nums.reverse() 
}
else {
    for(let i=n-1; i>=index+1; i--){
    if(nums[index]<nums[i]){
       [nums[index],nums[i]]=[nums[i],nums[index]];
       break
    }
}
console.log(index)
 nums = nums.splice(index+1, n - index - 1,...nums.splice(index + 1).reverse());}
};