
var numberOfSubarrays = function (nums, k) {
    
    function countAtMost(nums, k) {
    let left = 0, res = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] % 2 !== 0)
            k--;

        while (k < 0) {
            if (nums[left] % 2 !== 0)
                k++;
            left++;
        }
        res += (right - left + 1);
    }

    return res;
}
        return countAtMost(nums, k) - countAtMost(nums, k - 1);
    }