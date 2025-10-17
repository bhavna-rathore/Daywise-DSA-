/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let maxCount = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        console.log(count, maxCount, "--")
        if (s[i] == '(') {
            count++
            if (count > maxCount) {
                maxCount = count
            }
        } else if (s[i] == ')') {
            count--;
        }
    }
    return maxCount
};