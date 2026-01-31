
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let maxlength = 0;
    let left = 0;
    let countOfZero = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] == 0) {
            countOfZero++
        }
        if (countOfZero > k) {
            if (nums[left] === 0) {
                countOfZero--;
            }
            left++;
        }
        maxlength = Math.max(maxlength, j - left + 1)
    }
    return maxlength
};