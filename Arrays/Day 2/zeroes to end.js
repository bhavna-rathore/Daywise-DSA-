var moveZeroes = function(nums) {
   let n= nums.length
   let i=0;
   let j=0;

   while(i<n&& j<n){
   if(nums[j]==0){
        j++
   }
    else if(nums[j]!==0 && nums[i]==0&&i<=j ) {
        let k= nums[j];
        nums[j]= nums[i];
        nums[i]= k
        i++;
    }else{
      i++
      j++
    }
   }
    
};