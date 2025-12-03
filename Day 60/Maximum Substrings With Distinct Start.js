/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function (s) {
    let map = new Map()

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    let count = 0;
    for (let [item, val] of map) {
        if (val) {
            count++
        }
    }
    return count

};