/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict); // faster lookup
    const memo = new Map();

    function solve(start) {
        if (start === s.length) {
            return true
        }
        if (memo.has(start)) return memo.get(start);

        for (let end = start + 1; end <= s.length; end++) {
            const prefix = s.slice(start, end);
            if (wordSet.has(prefix) && solve(end)) {
                memo.set(start, true);
                return true;
            }
        }
        memo.set(start, false);
        return false;
    }
    if (solve(0)) return true
    else return false

};