// User function Template for javascript

/**
 * @param {number} n
 * @param {number[]} arr
 * @returns {bool}
 */

class Solution {
    isMaxHeap(n, arr) {
        // code here
        for (let i = 0; i < n; i++) {
            let left = 2 * i + 1
            if (left < n && arr[i] < arr[left]) {
                return false
            }
            let right = 2 * i + 2
            if (right < n && arr[i] < arr[right]) {
                return false
            }
        }
        return true
    }
}
