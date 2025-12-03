/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countElements = function (nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let ans = 0;
    let i = 0;
    while (i < n) {
        let val = nums[i];

        let j = i;
        while (j < n && nums[j] === val) j++;
        let freq = j - i;
        let greater = n - j;
        if (greater >= k) ans += freq;
        i = j;
    }
    return ans;
};
