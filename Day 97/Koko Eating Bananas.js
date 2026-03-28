/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let start = 1;
    let end = Math.max(...piles);
    let mid = Math.floor((start + end) / 2)

    let result = end

    while (start <= end) {
        let sum = 0
        for (let i = 0; i < piles.length; i++) {
            sum += Math.ceil(piles[i] / mid)
        }
        if (sum <= h) {
            result = mid;
            end = mid - 1
        } else {
            start = mid + 1
        }
        mid = Math.floor((start + end) / 2)
    }
    return result
};