/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {

    let n = nums.length;
    let oddCount = 0
    let result = 0

    let freq = new Map();
    // set count = 0 at postion 1
    freq.set(0, 1)

    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 !== 0) {
            oddCount++
        }
        if (freq.has(oddCount - k)) {
            result += freq.get(oddCount - k)
        }
        freq.set(oddCount, (freq.get(oddCount) || 0) + 1)
    }
    return result
};