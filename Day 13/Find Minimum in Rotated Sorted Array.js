/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let s = 1;
    let e = nums.length-1;
    let m = Math.floor((s+e)/2);
    let target = nums[0];
    while(s <= e){
        console.log(s,e,m,"====",target)
        if(nums[s] <= nums[m]){
            if(nums[s] <= target && target <= nums[m]){
                console.log(s,e,m,"==",target)
                e = m-1
                if(nums[s]<target)target= nums[s]
            }
            else{
                console.log(s,e,m,"===",target)    
           if(nums[s]<target) target= nums[s]
            s = m+1;
            }
        }
        else{
            if(nums[m] <= target && target <= nums[e]){
                if(nums[m]<target)target=nums[m]

                console.log(s,e,m,"=======",target)
                s = m+1
            }
            else {
                console.log(s,e,m,"===+",target)
                if(nums[m]<target)target=nums[m]
                e = m-1}
        }
        m = Math.floor((s+e)/2)
    }
    return target
    };