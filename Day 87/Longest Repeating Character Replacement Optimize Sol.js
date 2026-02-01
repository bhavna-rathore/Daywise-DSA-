/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let maxLength = 0;
    let l = 0;
    let maxFreq = 0;
    let freq = new Array(26).fill(0)

    for (let j = 0; j < s.length; j++) {
        let index = s.charCodeAt(j) - 65
        freq[index]++
        maxFreq = Math.max(maxFreq, freq[index])

        while ((j - l + 1) - maxFreq > k) {
            freq[s.charCodeAt(l) - 65]--
            l++
        }
        maxlength = Math.max(maxLength, j - l + 1)
    }
    return maxlength

};