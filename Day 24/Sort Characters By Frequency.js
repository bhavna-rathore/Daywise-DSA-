/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let n = s.length
    let map = new Map()

    for(let i=0; i<n; i++){
        map.set(s[i], (map.get(s[i])||0)+1)

    }
    let sorted = [...map.entries()].sort((a, b) => b[1] - a[1]).map(([char, freq]) => char.repeat(freq)).join('');
    return sorted;
    
};