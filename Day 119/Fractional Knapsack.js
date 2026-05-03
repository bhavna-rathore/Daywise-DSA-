/**
 * @param {number[]} val
 * @param {number[]} wt
 * @param {number} capacity
 * @returns {number}
 */

class Solution {
    fractionalKnapsack(val, wt, capacity) {
        // code here
        let pair = []

        for (let i = 0; i < val.length; i++) {
            pair.push([val[i], wt[i]])
        }
        let ans = 0
        pair.sort((a, b) => b[0] * a[1] - a[0] * b[1]);
        for (let [first, second] of pair) {
            if (second <= capacity) {
                ans += first
                capacity -= second
            } else {
                ans += first * capacity / second
                break;
            }
        }
        return ans



    }
}