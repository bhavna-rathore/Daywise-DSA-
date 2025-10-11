/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
class Solution {
    nthRoot(n, m) {
        // code here
        let s = 0;
        let e = m;
        let mid = Math.floor((s + e) / 2)
        let ans = -1

        while (s <= e) {
            let count = 0
            let res = 1
            while (count < n) {
                res = res * mid
                count++;
            }
            if (res === m) {
                ans = mid
                break;
            } else if (res < m) {
                s = mid + 1
            } else e = mid - 1;

            mid = Math.floor((s + e) / 2)

        }
        return ans

    }
}