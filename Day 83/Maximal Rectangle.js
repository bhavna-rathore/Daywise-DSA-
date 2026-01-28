/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    if (matrix.length === 0) return 0;

    let rows = matrix.length;
    let cols = matrix[0].length;
    let heights = new Array(cols).fill(0);
    let globalMax = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === "1" ? heights[j] + 1 : 0;
        }

        let left = new Array(cols);
        let right = new Array(cols);
        let stack = [];

        for (let j = 0; j < cols; j++) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[j]) {
                stack.pop();
            }
            left[j] = stack.length === 0 ? -1 : stack[stack.length - 1];
            stack.push(j);
        }

        stack = [];
        for (let j = cols - 1; j >= 0; j--) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[j]) {
                stack.pop();
            }
            right[j] = stack.length === 0 ? cols : stack[stack.length - 1];
            stack.push(j);
        }
        for (let j = 0; j < cols; j++) {
            let width = right[j] - left[j] - 1;
            globalMax = Math.max(globalMax, heights[j] * width);
        }
    }

    return globalMax;
};
