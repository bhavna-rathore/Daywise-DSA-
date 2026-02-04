/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let n = cardPoints.length
    let maxSum = 0

    for (let i = 0; i < k; i++) {
        let tempSum = 0;

        for (let j = 0; j < i; j++) {
            tempSum += cardPoints[j]
        }

        for (let l = 0; l < k - i; l++) {
            tempSum += cardPoints[n - l - 1]
        }

        maxSum = Math.max(tempSum, maxSum)

    }
    return maxSum

};