/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let n = s.length;
    let res = ""
    let balance = 0


    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            if (balance > 0) {
                res += s[i]
            }
            balance++
        }
        else {
            balance--;
            if (balance > 0) {
                res += s[i]
            }
        }

    }
    return res;

};