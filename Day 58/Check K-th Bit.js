/**
 * @param {Number} n
 * @param {Number} k
 * @returns {boolean}
 */
class Solution {
    checkKthBit(n, k) {
        // code here
        let binary = []
        while (n) {
            if (n % 2 == 1) {
                binary.push(1)
            }
            else {
                binary.push(0)
            }
            n = Math.floor(n / 2)
        }

        return binary[k] === 1 ? true : false
    }
}