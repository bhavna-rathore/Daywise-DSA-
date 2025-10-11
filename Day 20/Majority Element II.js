/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    // let map= new Map();
    let n= nums.length
    let res=[-1,-1]
    let count1=0;
    let count2=0;
    for(let i=0; i<n; i++){
       if(count1==0&& res[1]!==nums[i]){
        count1=1;
        res[0]=nums[i]
       }else if(count2==0 &&res[0]!==nums[i]){
        count2=1;
        res[1]=nums[i]
       }
       else if(res[0]===nums[i]){
        count1++
       }else if(res[1]===nums[i]){
        count2++
       }else{
        count1--
        count2--
       }
    }
    console.log(res[0],res[1],count1,count2)
    
    let ans=[]
     count1 = 0, count2 = 0;
    for(let i=0; i<n; i++){
          if (res[0] == nums[i]) {
                count1++;
            } else if (res[1] == nums[i]) {
                count2++;
            }

    }
    if(count1>n/3){
        ans.push(res[0])
    }
     if(count2>n/3){
        ans.push(res[1])
    }
    return ans
};