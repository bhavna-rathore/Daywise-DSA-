/**
 * @param number[][] arr
 * @returns number
 */
class Solution {
    lowerBound(arr, x) {
        let n = arr.length
        let s = 0;
        let e = n - 1
        let ans = n
        while (s <= e) {
            let mid = Math.floor((s + e) / 2)
            if (arr[mid] < x) {
                s = mid + 1
            } else {
                ans = mid
                e = mid - 1
            }
        }
        return ans
    }
    rowWithMax1s(arr) {
        // code here

        let n = arr.length
        let m = arr[0].length
        let index = -1
        let count = -1
        for (let i = 0; i < n; i++) {
            let oneCount = m - this.lowerBound(arr[i], 1)

            if (oneCount > count) {
                index = i
                count = oneCount
            }
        }
        return index
    }
}
