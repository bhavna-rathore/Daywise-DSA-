/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    function isPossible(bloomDay, m, k, day) {

        let count = 0;
        let noOfB = 0
        for (let i = 0; i < n; i++) {
            if (bloomDay[i] <= day) {
                count++
            } else {
                noOfB += Math.floor(count / k)
                count = 0
            }

        }
        noOfB += Math.floor(count / k)

        if (noOfB >= m) {
            return true
        }
        else return false;

    }
    let n = bloomDay.length
    if (n < m * k) {
        return -1
    }
    let min = Math.min(...bloomDay)
    let max = Math.max(...bloomDay)
    console.log(min, max)
    let ans = -1
    while (min <= max) {
        let day = Math.floor(min + (max - min) / 2)
        if (isPossible(bloomDay, m, k, day)) {
            ans = day
            max = day - 1
        }
        else min = day + 1
    }

    return ans

};