/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = matrix.length
    let columns= matrix[0].length
    let rowindex=new Set();
    let columnindex =new Set();
    for(let i=0; i< rows; i++){
        for(let j=0; j<columns; j++){
            
            if(matrix[i][j]===0){
                rowindex.add(i)
                columnindex.add(j)
                 console.log(matrix[i][j],'=')
            }
        }
    }
console.log(rowindex.size)
    
       for (let r of rowindex) {
        for (let j = 0; j < columns; j++) {
            matrix[r][j] = 0;
        }
    }

    for (let c of columnindex) {
        for (let i = 0; i < rows; i++) {
            matrix[i][c] = 0;
        }
    }
    
};