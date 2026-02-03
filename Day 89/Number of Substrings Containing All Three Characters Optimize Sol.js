/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let res = 0;
    let n = s.length
    let aPresent = -1
    let bPresent = -1
    let cPresent = -1
    for (let j = 0; j < n; j++) {
        if (s[j] === 'a') {
            aPresent = j
        }
        if (s[j] === 'b') {
            bPresent = j
        }
        if (s[j] === 'c') {
            cPresent = j
        }
        let minLast = Math.min(aPresent, bPresent, cPresent);
        if (minLast !== -1) {
            res += minLast + 1;
        }
    }
    return res

};