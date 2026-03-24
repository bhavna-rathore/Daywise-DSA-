/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let row = 0
    let col = 0
    let rowEnd = matrix.length;
    let colEnd = matrix[0].length;
    console.log(rowEnd, colEnd)
    for (let i = 0; i < rowEnd; i++) {
        for (j = i + 1; j < colEnd; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    for (let i = 0; i < rowEnd; i++) {
        matrix[i].reverse()
    }

    return matrix
};