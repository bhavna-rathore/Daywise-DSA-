/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let res = [];
    let n = matrix.length
    let m = matrix[0].length
    // let col=0;
    for (let col = 0; col < m; col++) {
        for (let row = n - 1; row >= 0; row--) {
            // console.log(matrix[row][col],'=')
            res.push(matrix[row][col])
        }
    }
    let k = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix[i][j] = res[k]
            k++;
            // console.log(res[i],matrix[i][j],'=',i,j)
            res.push(matrix[i][j])
        }
    }

};