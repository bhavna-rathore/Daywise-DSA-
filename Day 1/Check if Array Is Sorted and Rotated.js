var check = function(nums) {

    let n= nums.length;
    let index=-1;
    for(let i=1; i<n; i++){
        if(nums[i-1]>nums[i]){
            index=i
            
        }
    }
    if(index==-1){
        return true;
    }
    //   console.log(index)
   let k= nums.slice(index).concat(nums.slice(0,index))
    for(let i=1; i<n; i++){
        //  console.log(k[i],'-')
        if(k[i-1]>k[i]){
            return false
        }
    }
   
     return true;
};