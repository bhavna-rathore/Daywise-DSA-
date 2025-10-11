

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let s = 0;
    let e = nums.length - 1;
    let m = Math.floor((s + e) / 2);
    while (s < e) {
        if ((m % 2 === 0 && nums[m] === nums[m + 1]) || (m % 2 === 1 && nums[m] === nums[m - 1])) {
            s = m + 1;
        } else {
            e = m
        }
        m = Math.floor((s + e) / 2);
    }
    return nums[s]

};