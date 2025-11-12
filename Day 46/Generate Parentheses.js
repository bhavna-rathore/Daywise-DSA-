/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let s = ""
    let res = []

    function allString(s, open, close, res, n) {
        if (s.length == 2 * n) {
            res.push(s)
            return
        }
        console.log(s, open, close, res)
        if (open < n) allString(s + '(', open + 1, close, res, n)
        if (close < open) allString(s + ')', open, close + 1, res, n)

    }

    allString(s, 0, 0, res, n)
    return res

};