// User function Template for javascript
/**
 * @param {number} l
 * @param {number} r
 * @returns {number}
 */

class Solution {
    // Function to find XOR of two numbers without using XOR operator
    findXOR(l, r) {
        // your code here
        function xor(n) {
            if (n % 4 === 1) return 1
            else if (n % 4 === 2) return n + 1;
            else if (n % 4 === 3) return 0;
            else return n
        }
        return xor(l - 1) ^ xor(r)
    }
}