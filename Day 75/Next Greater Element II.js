/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {

    let ans = []
    var nextGreater = function (nums, start) {
        if (start === nums.length) {
            return;
        }
        let flag = false
        for (let i = start; i < nums.length; i++) {
            if (nums[start] < nums[i]) {
                ans.push(nums[i])
                flag = true
                break;
            }
        }
        if (!flag) {
            for (let i = 0; i < start; i++) {
                if (nums[start] < nums[i]) {
                    ans.push(nums[i])
                    flag = true
                    break
                }
            }
        }
        if (!flag) ans.push(-1)
        nextGreater(nums, start + 1)
    }
    nextGreater(nums, 0)
    return ans


};