/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0
    for (let i = 0; i < s.length; i++) {
        let hash = new Array(256).fill(0);
        for (let j = i; j < s.length; j++) {
            if (hash[s.charCodeAt(j)] === 1) break
            hash[s.charCodeAt(j)] = 1;
            let len = j - i + 1;
            maxLength = Math.max(len, maxLength)
        }
    }
    return maxLength

};