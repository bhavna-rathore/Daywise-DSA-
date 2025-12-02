/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 0) return 2147483647;

    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }

    const sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

    let n = Math.abs(dividend);
    const d = Math.abs(divisor);

    let ans = 0;

    while (n >= d) {
        let temp = d;
        let multiple = 1;

        while ((temp << 1) > 0 && (temp << 1) <= n) {
            temp <<= 1;
            multiple <<= 1;
        }

        n -= temp;
        ans += multiple;
    }

    ans = sign * ans;

    if (ans > 2147483647) return 2147483647;
    if (ans < -2147483648) return -2147483648;

    return ans;
};
