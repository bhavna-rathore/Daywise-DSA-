/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let count = 0;
    let i = 0;
    let j = 0;
    let children = g.length;
    let cookies = s.length;
    s.sort((a, b) => a - b)
    g.sort((a, b) => a - b)

    while (i < children && j < cookies) {
        if (s[j] >= g[i]) {
            count++
            i++
            j++
        }
        else if (s[j] < g[i]) {
            j++
        }

    }
    return count

};