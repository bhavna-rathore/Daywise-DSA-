// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {

    setBits(n) {
        // your code here
        let count = 0;
        while (n) {
            if (n % 2 === 1) count++
            n = Math.floor(n / 2)
        }
        return count
    }


}