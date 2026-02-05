/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    function atMost(nums, k) {
        if (k < 0) return 0;

        let n = nums.length
        let count = 0;
        let sum = 0;

        let i = 0;
        let j = 0;
        while (j < n) {
            sum += nums[j]

            while (sum > k) {
                sum -= nums[i]
                i++;

            }
            // if (sum === k)
            count += (j - i + 1);
            j++
        }

        return count
    }

    return atMost(nums, goal) - atMost(nums, goal - 1);


};