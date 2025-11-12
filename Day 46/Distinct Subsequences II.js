/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {

    let arr = []
    let res = []
    function arrOfSubset(s, start, arr, res) {
        if (s.length === start) {
            if (arr.length > 0) {
                res.push(arr.join(''));
            }
            return;

        }
        arrOfSubset(s, start + 1, arr, res)
        arr.push(s[start])
        arrOfSubset(s, start + 1, arr, res)
        arr.pop()
    }
    arrOfSubset(s, 0, arr, res)
    let unique = new Set(res);
    return unique.size;

};