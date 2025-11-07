/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;

    let isNegative = n < 0;
    n = Math.abs(n);

    function fastPow(x, n) {
        if (n === 0) return 1;
        let half = fastPow(x, Math.floor(n / 2));
        if (n % 2 === 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }

    let result = fastPow(x, n);
    return isNegative ? 1 / result : result;
};
 