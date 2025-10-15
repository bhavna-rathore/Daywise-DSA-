/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const ROW = matrix.length
    const COL = matrix[0].length

    let l = 0
    let r = COL - 1
    let t = 0
    let b = ROW - 1

    const result = []

    while(l < r && t < b) {

        for(let i = l; i < r; i++) {
            result.push(matrix[t][i])
        }

        for(let i = t; i < b; i++) {
            result.push(matrix[i][r])
        }

        for(let i = r; i > l; i--) {
            result.push(matrix[b][i])
        }

        for(let i = b; i > t; i--) {
            result.push(matrix[i][l])
        }

        l++
        r--
        t++
        b--
    }

    console.log(l, r, t, b)

    if(l < r && t === b) {
        for(let i = l; i <= r; i++) {
            result.push(matrix[t][i])
        }
    }

    if(t < b && l === r) {
        for(let i = t; i <= b; i++) {
            result.push(matrix[i][l])
        }
    }

    if(l === r && l === t && t === b) {
        result.push(matrix[t][l])
    }

    return result
};