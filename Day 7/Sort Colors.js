
var sortColors = function(nums) {
   
     let n=nums.length
      let i=0;
      let k=0;
     let j=n-1;
     while(k<=j){
        if(nums[k]==2){
            let next= nums[j]
            nums[j]= nums[k];
            nums[k]=next;
            j--
           
        }else if(nums[k]==0){
             let next= nums[i]
            nums[i]= nums[k];
            nums[k]=next;
             k++
             i++
        }else k++
       
        // console.log( nums[i],nums[j], nums[k], i, j , k, '---')
     }
    
};