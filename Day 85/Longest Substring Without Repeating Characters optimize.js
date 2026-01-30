/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let maxLength = 0
    let hash = new Array(256).fill(-1);
    let l = 0;
    let r = 0;
    let n = s.length
    while (r < n) {
        if (hash[s.charCodeAt(r)] != -1) {
            l = Math.max(hash[s.charCodeAt(r)] + 1, l)
        }
        let len = r - l + 1
        maxLength = Math.max(maxLength, len)
        hash[s.charCodeAt(r)] = r
        r++
    }
    return maxLength

};