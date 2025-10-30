/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    function findDivision(nums, threshold, calThreshold) {
        let ans = 0
        for (let i = 0; i < nums.length; i++) {
            ans += Math.ceil(nums[i] / calThreshold)
        }
        console.log(ans, calThreshold)
        return ans

    }
    let min = 1
    let max = Math.max(...nums)
    let ans = Infinity
    let result = max
    while (min <= max) {
        let calThreshold = Math.floor(min + (max - min) / 2);
        ans = findDivision(nums, threshold, calThreshold)
        if (ans <= threshold) {
            max = calThreshold - 1
            result = calThreshold
        } else {
            min = calThreshold + 1
        }
    }
    return result;
};