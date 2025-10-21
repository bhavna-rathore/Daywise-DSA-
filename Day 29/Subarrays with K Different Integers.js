/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {

    function subarrayWithAtMostK(nums, k) {
        let map = new Map();
        let left = 0;
        let ans = 0;

        for (let right = 0; right < nums.length; right++) {
            map.set(nums[right], (map.get(nums[right]) || 0) + 1);

            while (map.size > k) {
                map.set(nums[left], map.get(nums[left]) - 1);
                if (map.get(nums[left]) === 0) {
                    map.delete(nums[left]);
                }
                left++;
            }

            ans += right - left + 1;
        }

        return ans;
    }

    return subarrayWithAtMostK(nums, k) - subarrayWithAtMostK(nums, k - 1);
};