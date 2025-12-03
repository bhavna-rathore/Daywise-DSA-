/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function (nums) {
    let map = {}
    let ans = Infinity
    function reverse(val) {
        let rev = 0
        if (val === 0) return 0;
        while (val > 0) {
            rev = rev * 10 + (val % 10)
            val = Math.floor(val / 10)
        }
        return rev
    }
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i]

        if (val in map) {
            ans = Math.min(ans, i - map[val])
        } else {
            map[reverse(val)] = i
        }
    }

    return ans === Infinity ? -1 : ans

};