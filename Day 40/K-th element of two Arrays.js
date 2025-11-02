/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} k
 * @returns {number}
 */

class Solution {
    kthElement(a, b, k) {
        // code here
        let n = a.length, m = b.length;
        let total = n + m;

        let i = 0, j = 0, count = 0;


        while (i < n || j < m) {
            let val;

            if (j >= m || (i < n && a[i] <= b[j])) {
                val = a[i++];
            } else {
                val = b[j++];
            }

            count++;
            if (count === k) {
                return val
            }
            // console.log(i,j, count, total, val)
        }

    }
}