/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let n = nums.length
    let ans = [];
    let index = -1;


    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            break
        }

    }
    if (index == -1) {
        nums.reverse()
    }
    else {
        for (let i = n - 1; i >= index + 1; i--) {
            if (nums[index] < nums[i]) {
                [nums[index], nums[i]] = [nums[i], nums[index]];
                break
            }
        }
        console.log(index)
        let left = index + 1;
        let right = nums.length - 1;

        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
};