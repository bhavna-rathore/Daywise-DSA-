/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
function solve(col, board, n, leftRow, lowerDiag, upperDiag, res) {
        
        if (col === n) {
            res.push(board.map(row => row.join("")));
            return;
        }

        for (let row = 0; row < n; row++) {

            if (!leftRow[row] && !lowerDiag[row + col] && !upperDiag[n - 1 + col - row]) {

                board[row][col] = 'Q';
                leftRow[row] = lowerDiag[row + col] = upperDiag[n - 1 + col - row] = true;

                solve(col + 1, board, n, leftRow, lowerDiag, upperDiag, res);

                board[row][col] = '.';
                leftRow[row] = lowerDiag[row + col] = upperDiag[n - 1 + col - row] = false;
            }
        }
    }

        const board = Array.from({ length: n }, () => Array(n).fill('.'));
        const leftRow = Array(n).fill(false);
        const lowerDiag = Array(2 * n - 1).fill(false);
        const upperDiag = Array(2 * n - 1).fill(false);
        const res = [];
        solve(0, board, n, leftRow, lowerDiag, upperDiag, res);
        return res;
};