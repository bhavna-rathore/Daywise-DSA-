/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let row = 0;
    let col = 0
    let temp = []

    let rowEnd = matrix.length
    let colEnd = matrix[0].length
    while (row < rowEnd && col < colEnd) {
        //column
        for (let i = col; i < colEnd; i++) {

            temp.push(matrix[row][i])
        }
        if (row < rowEnd) row++;
        for (let i = row; i < rowEnd; i++) {


            temp.push(matrix[i][colEnd - 1])
        }
        if (colEnd > col) colEnd--
        if (rowEnd > row) {
            for (let i = colEnd - 1; i >= col; i--) {

                temp.push(matrix[rowEnd - 1][i])
            }
            rowEnd--;
        }
        if (col < colEnd) {
            for (let i = rowEnd - 1; i >= row; i--) {
                temp.push(matrix[i][col]);
            }
            col++
        }

    }
    return temp

};