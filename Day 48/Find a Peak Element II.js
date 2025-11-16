/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
    let row = mat.length
    let col = mat[0].length
    if (row == 1 && col == 1) {
        return [0, 0]
    }

    let colStart = 0
    col = mat[0].length - 1
    while (colStart <= col) {
        let mid = Math.floor(colStart + (col - colStart) / 2)
        let rowStart = 0;
        for (let i = 0; i < row; i++) {
            if (mat[rowStart][mid] < mat[i][mid]) {
                rowStart = i
            }
        }


        if ((mid == 0 || mat[rowStart][mid] > mat[rowStart][mid - 1]) &&
            (mid == col || mat[rowStart][mid] > mat[rowStart][mid + 1])) {
            return [rowStart, mid]

        } else if (mid > 0 && mat[rowStart][mid - 1] > mat[rowStart][mid]) {
            col = mid - 1

        } else {
            colStart = mid + 1

        }


    }
    return [-1, -1]
};