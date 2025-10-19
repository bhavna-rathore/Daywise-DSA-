/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    const rev = s.split('').reverse().join('');
    const l = s.length;

    for (let i = 0; i < l; i++) {
        if (s.startsWith(rev.substring(i))) {
            return rev.substring(0, i) + s;
        }
    }
    
    return "";
};
