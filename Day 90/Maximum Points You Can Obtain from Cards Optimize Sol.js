/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let totalSum = 0
    let n = cardPoints.length;

    for (let i = 0; i < n; i++) {
        totalSum += cardPoints[i]
    }

    let windowSize = n - k
    let minWindowSum = 0;
    let windowSum = 0;

    for (let i = 0; i < windowSize; i++) {
        windowSum += cardPoints[i]
    }
    
    minWindowSum = windowSum

    for (let i = windowSize; i < n; i++) {
        windowSum += cardPoints[i] - cardPoints[i - windowSize]
        minWindowSum = Math.min(minWindowSum, windowSum)
    }
    return totalSum - minWindowSum

};