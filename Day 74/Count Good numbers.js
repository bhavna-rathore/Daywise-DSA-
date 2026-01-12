const MOD = 10**9 + 7;
function countGoodNumbers(index, n) {
    if (index === n) {
        return 1;
    }

    let result = 0;
    if (index % 2 === 0) {  
        const evenDigits = [0, 2, 4, 6, 8];
        for (let d of evenDigits) {
            result = (result + countGoodNumbers(index + 1, n)) % MOD;
        }
    } 
    else {  
        const primeDigits = [2, 3, 5, 7];
        for (let d of primeDigits) {
            result = (result + countGoodNumbers(index + 1, n)) % MOD;
        }
    }
    return result;
}

