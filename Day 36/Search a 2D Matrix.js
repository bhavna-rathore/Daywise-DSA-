/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

   
    let rowStart =0;
    let columnEnd = matrix[0].length-1
    let rowEnd = matrix.length-1
    if(columnEnd ==0 && rowEnd==0 && matrix[rowEnd][columnEnd]==target){
        return true

    }
    console.log(columnEnd, rowEnd)
    while(columnEnd>=0 && rowStart<=rowEnd){   
        let mid= matrix[rowStart][columnEnd]

        if(mid===target){
            return true
        }
        else if(mid>target){
            columnEnd--
        }else{
            rowStart++
        }
    }
 

    return false

    
};