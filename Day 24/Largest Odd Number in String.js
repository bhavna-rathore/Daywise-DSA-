/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let n = num.length;
    let maxOdd = ""
    if (num[num.length - 1] % 2 !== 0) {
        return num
    }
    for (let i = 0; i < n; i++) {
        if (num[i] % 2 !== 0) {
            maxOdd = num.substring(0, i + 1);
        }
    }
    return maxOdd;
};