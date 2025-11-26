/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = []

    function palindrome(s, start, end) {
        while (start <= end) {
            if (s[start++] !== s[end--]) {
                return false
            }
        }
        return true
    }

    function subString(s, start, path) {
        if (start === s.length) {
            res.push([...path])
            return;
        }
        for (let i = start; i < s.length; i++) {
            if (palindrome(s, start, i)) {
                path.push(s.substring(start, i + 1))
                subString(s, i + 1, path)
                path.pop()

            }
        }
    }

    subString(s, 0, [])
    return res;

};