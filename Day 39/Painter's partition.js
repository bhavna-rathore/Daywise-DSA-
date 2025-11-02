/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    countOfSubArray(arr, k, m) {

        let count = 0;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (sum + arr[i] <= m) {
                sum += arr[i]
            } else {
                count++
                sum = arr[i]
            }
        }
        return count

    }
    minTime(arr, k) {
        // code here
        let s = Math.max(...arr)
        let e = 0;
        if (k > arr.length) return -1;
        for (let i = 0; i < arr.length; i++) {
            e += arr[i]
        }


        while (s <= e) {
            let m = Math.floor(s + (e - s) / 2)

            let c = this.countOfSubArray(arr, k, m)
            //  console.log(s,e,m,c)
            if (c >= k) {
                s = m + 1
            } else e = m - 1

        }
        return s
    }
}