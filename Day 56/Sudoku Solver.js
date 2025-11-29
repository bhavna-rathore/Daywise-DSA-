/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    function valid(board, row, col, c) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === c) return false
            if (board[i][col] === c) return false
            if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)]
            [3 * Math.floor(col / 3) + (i % 3)] === c) return false;

        }
        return true
    }
    function solve(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === ".") {
                    for (let num = 1; num <= 9; num++) {
                        let c = String(num);

                        if (valid(board, i, j, c)) {
                            board[i][j] = c
                            if (solve(board) === true) {
                                return true
                            }
                            else board[i][j] = "."
                        }
                    }
                    return false
                }

            }
        }
        return true
    }
    solve(board)

};