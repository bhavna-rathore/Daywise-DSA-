
/**
 * @param {number} N
 * @param {number[]} arr
 * @param {number} queries
 * @param {number[]} indices
 * @returns {number[]}
 */

class Solution {
    count_NGE(arr, indices) {
        // code here
        let ans = []
        for (let i = 0; i < indices.length; i++) {
            let el = arr[indices[i]]
            let count = 0
            for (let j = indices[i] + 1; j < arr.length; j++) {
                if (arr[j] > el) {
                    count++
                }
            }
            ans.push(count)
        }
        return ans
    }

}