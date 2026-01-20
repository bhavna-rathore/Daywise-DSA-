/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
    let n = nums.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let mini = nums[i];
        let maxi = nums[i]
        for (let j = i; j < n; j++) {

            mini = Math.min(mini, nums[j]);
            maxi = Math.max(maxi, nums[j])
            sum = sum + (maxi - mini)
        }
    }

    return sum;

};