/**
 * @param {number[]} stalls
 * @param {number} k
 * @returns {number}
 */

class Solution {
    noOfCowCanSit(arr, n, mid, k) {
        let count = 1; // place the first cow at the first stall
        let lastPos = arr[0];

        for (let i = 1; i < n; i++) {
            if (arr[i] - lastPos >= mid) {
                count++;
                lastPos = arr[i];
            }
        }

        return count;
    }
    aggressiveCows(stalls, k) {
        // codeF here
        stalls.sort((a, b) => a - b)
        let s = 0
        let n = stalls.length
        let e = stalls[n - 1] - stalls[0]
        // console.log(s,n,e)
        let ans = 0

        while (s <= e) {
            let mid = Math.floor(s + (e - s) / 2)

            let cowsNo = this.noOfCowCanSit(stalls, n, mid, k)
            if (cowsNo >= k) {
                ans = mid
                s = mid + 1


            } else {
                e = mid - 1
            }
        }
        return ans;

    }
}