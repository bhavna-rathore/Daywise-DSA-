/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
        let map = new Map();
    let n = grid.length;
    let repeated = -1;
    let missing = -1;

    // Flatten the grid and count frequencies
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let val = grid[i][j];
            map.set(val, (map.get(val) || 0) + 1);
        }
    }

    // Check for repeated and missing values
    for (let i = 1; i <= n * n; i++) {
        let count = map.get(i) || 0;
        if (count === 0) missing = i;
        if (count === 2) repeated = i;
    }

    return [repeated, missing];

};