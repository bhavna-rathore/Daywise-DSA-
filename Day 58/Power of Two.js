/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    // for power of 2 we need to have 1 set bits 
    return n > 0 && !(n & n - 1)

};
