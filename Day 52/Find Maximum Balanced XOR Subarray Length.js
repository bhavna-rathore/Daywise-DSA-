/**
 * @param {number[]} nums
 * @return {number}
 */
var maxBalancedSubarray = function (nums) {
    const n = nums.length;
    const seen = new Map();

    let diff = 0;
    let px = 0;
    seen.set("0|0", 0);

    let maxLen = 0;

    for (let i = 0; i < n; i++) {
        const val = nums[i];
        if (val % 2 === 0) diff += 1;
        else diff -= 1;
        px = px ^ val;

        const key = diff + '|' + px;
        if (seen.has(key)) {
            const firstIdx = seen.get(key);
            const len = (i + 1) - firstIdx;
            if (len > maxLen) maxLen = len;
        } else {

            seen.set(key, i + 1);
        }
    }

    return maxLen;
};
