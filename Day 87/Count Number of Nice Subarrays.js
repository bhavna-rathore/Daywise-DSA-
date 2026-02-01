/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {

    let n = nums.length;
    let count = 0

    for (let i = 0; i < n; i++) {
        let odd = 0;
        for (let j = i; j < n; j++) {

            if (nums[j] % 2 != 0) {
                odd++
            }
            if (odd === k) count++

        }
    }
    return count
};