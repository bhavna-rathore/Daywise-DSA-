/**
 * @param {number[][]} mat
 * @returns {number}
 */

class Solution {
    upperbound(mat, m) {
        let s = 0
        let e = mat.length - 1
        let ans = mat.length
        while (s <= e) {
            let mid = Math.floor(s + (e - s) / 2)
            if (mat[mid] > m) {
                ans = mid
                e = mid - 1
            } else {
                s = mid + 1

            }
        }
        return ans

    }
    elementCount(mat, m) {
        let row = mat.length
        let count = 0
        for (let i = 0; i < row; i++) {
            count += this.upperbound(mat[i], m)
        }
        return count
    }
    median(mat) {
        // code here
        let col = mat[0].length
        let row = mat.length
        let s = Infinity, e = -Infinity;
        for (let i = 0; i < row; i++) {
            s = Math.min(s, mat[i][0]);
            e = Math.max(e, mat[i][col - 1]);
        }

        let desired = Math.floor((row * col) / 2);

        while (s <= e) {
            let mid = Math.floor(s + (e - s) / 2)
            let countOfElement = this.elementCount(mat, mid)

            if (countOfElement > desired) {
                e = mid - 1

            } else {
                s = mid + 1
            }
        }
        return s

    }
}