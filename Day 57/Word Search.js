/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length
    let n = board[0].length

    let visited = Array.from({ length: m }, () => Array(n).fill(0))
    function solve(index, i, j) {
        if (index === word.length) {
            return true
        }
        if (i < 0 || i >= m || j < 0 || j >= n) return false;
        if (board[i][j] !== word[index] || visited[i][j]) return false;


        visited[i][j] = true
        const found =
            solve(index + 1, i - 1, j) ||
            solve(index + 1, i + 1, j) ||
            solve(index + 1, i, j - 1) ||
            solve(index + 1, i, j + 1);


        visited[i][j] = false;

        return found;

    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (solve(0, i, j)) return true;
        }
    }
    return false;


};