/**
 * @param {number} n
 * @return {number}
 */
var largestPrime = function (n) {

    let array = new Array(n + 1).fill(true);
    array[0] = array[1] = false;


    for (let i = 2; i * i <= n; i++) {
        if (array[i]) {
            for (let j = i * i; j <= n; j += i) {
                array[j] = false;
            }
        }
    }

    // collect primes up to n
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (array[i]) primes.push(i);
    }

    // sum consecutive primes starting from 2
    let sum = 0;
    let largest = 0;
    for (let i = 0; i < primes.length; i++) {
        sum += primes[i];
        if (sum > n) break;
        if (array[sum]) {
            largest = sum;
        }
    }

    return largest;
};