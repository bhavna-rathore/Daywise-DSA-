var nextPermutation = function(nums) {
let n= nums.length
    // let ans = Array.from({ length: n }, () => Array(n).fill(0))
     let ans=[];
    let index=-1;

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
 let suffix = nums.splice(index + 1).reverse();
    nums.push(...suffix);
}
};