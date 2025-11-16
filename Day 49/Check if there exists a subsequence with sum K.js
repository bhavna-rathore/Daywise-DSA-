
class Solution {

    func(ind, sum, nums) {
        if (sum === 0) return 1;

        if (sum < 0 || ind === nums.length) return 0;

        return this.func(ind + 1, sum - nums[ind], nums) || this.func(ind + 1, sum, nums);
    }

    countSubseqenceWithTargetSum(nums, target) {
        return this.func(0, target, nums);
    }
}
