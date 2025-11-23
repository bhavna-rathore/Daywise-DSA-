/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
    let x = []
    while (n) {
        let v = n % 10
        n = Math.floor(n / 10)
        if (v !== 0) {

            x.push(v)
        }
    }
    let sum = 0;
    let res = 0;
    for (let i = x.length - 1; i >= 0; i--) {
        sum += x[i];
        console.log(x[i]);
        res = res * 10 + x[i];
    }

    return res * sum

};