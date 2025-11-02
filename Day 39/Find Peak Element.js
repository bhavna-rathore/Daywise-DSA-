/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let n = nums.length

    if (n == 1) {
        return 0
    }
    if (nums[0] > nums[1]) {
        return 0
    } if (nums[n - 1] > nums[n - 2]) {
        return n - 1
    }

    let s = 1
    let e = n - 2

    while (s <= e) {
        let m = Math.floor(s + (e - s) / 2);
        console.log(n, s, e, m)
        if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
            return m
        } else if (nums[m] > nums[m + 1]) {
            e = m - 1
        } else {
            s = m + 1
        }
    }
    return -1

};