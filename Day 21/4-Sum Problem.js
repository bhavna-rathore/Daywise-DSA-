/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let n = nums.length;
    let res = []

    nums.sort((a, b) => a - b)
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1])
            continue;
        for (let l = i + 1; l < n - 2; l++) {
            if (l > i + 1 && nums[l] === nums[l - 1]) continue
            let j = l + 1;
            let k = n - 1;
            while (j < k) {
                // console.log(nums[i], nums[j], nums[k])
                let sum = nums[i] + nums[j] + nums[k] + nums[l]
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]])
                    j++
                    k--
                    while (j < k && nums[j] === nums[j - 1]) j++;
                    while (j < k && nums[k] === nums[k + 1]) k--;

                } else if (sum > target) {
                    k--
                } else j++
            }
        }
    }
    return res
};