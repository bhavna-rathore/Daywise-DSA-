/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    let s = Math.max(...nums)
    let e = 0;
    if (k > nums.length) return -1;
    for (let i = 0; i < nums.length; i++) {
        e += nums[i]
    }
    function countOfSubArray(nums, k, m) {

        let count = 0;
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            if (sum + nums[i] <= m) {
                sum += nums[i]
            } else {
                count++
                sum = nums[i]
            }
        }
        return count

    }

    while (s <= e) {
        let m = Math.floor(s + (e - s) / 2)

        let c = countOfSubArray(nums, k, m)
        console.log(s, e, m, c)
        if (c >= k) {
            s = m + 1
        } else e = m - 1

    }
    return s
};