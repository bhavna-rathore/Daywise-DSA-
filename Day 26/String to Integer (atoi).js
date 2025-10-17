/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let res = 0;
    let positiveVal = true;
    let i = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    while (i < s.length && s[i] === ' ') {
        i++;
    }

    if (s[i] === '+' || s[i] === '-') {
        if (s[i] === '-') positiveVal = false;
        i++;
    }
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        res = res * 10 +Number(s[i]);
        
        if (positiveVal && res > INT_MAX) return INT_MAX;
        if (!positiveVal && -res < INT_MIN) return INT_MIN;

        i++;
    }

    return positiveVal ? res : -res;

};