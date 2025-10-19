/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let n = s.length;
    let count1 = 0;
    let count2 = 0
    let res = []
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            count1++
        } else {
            if (count1 > 0) count1--;
            else count2++
        }
    } console.log(count1, count2)
    return count1 + count2
};