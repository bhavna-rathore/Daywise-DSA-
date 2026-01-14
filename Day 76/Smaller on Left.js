// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    // Complete the function
    Smallestonleft(arr, n) {
        // your code here
        let ans = []
        function helper(arr, start) {
            if (start === arr.length) {
                return;
            }

            let flag = false;
            let min = Infinity
            // Scan backwards to find nearest smaller element
            for (let i = start - 1; i >= 0; i--) {

                if (arr[i] < arr[start]) {
                    console.log(arr[i], arr[start], min, "hello")
                    min = Math.min(min, arr[i])
                    flag = true;

                }
            }
            ans.push(flag ? min : -1);
            helper(arr, start + 1);
        }

        // First element always has no smaller on left
        ans.push(-1);
        helper(arr, 1);
        return ans;

    }
}