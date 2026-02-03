/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let res = 0;
    let n = s.length
    for (let i = 0; i < n; i++) {
        let aPresent = false
        let bPresent = false
        let cPresent = false
        for (let j = i; j < n; j++) {
            if (s[j] === 'a') {
                aPresent = true
            }
            if (s[j] === 'b') {
                bPresent = true
            }
            if (s[j] === 'c') {
                cPresent = true
            }
            if (aPresent && bPresent && cPresent) {
                res++
            }
        }
    }
    return res

};