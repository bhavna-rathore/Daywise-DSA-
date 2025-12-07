/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let count = 0
    if (n == 0 || n == 1 || n == 2) return count
    let isPrime = new Array(n).fill(true)
    isPrime[0] = false;
    isPrime[1] = false;


    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }

        }
    }
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }


    return count;

};