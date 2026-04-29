/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
    hand.sort((a, b) => a - b)

    function findSuccessor(hand, groupSize, i) {
        let next = hand[i] + 1;
        hand[i] = -1
        let count = 1;
        i += 1
        while (i < hand.length && count < groupSize) {
            if (hand[i] === next) {
                next = hand[i] + 1;
                hand[i] = -1
                count++
            }
            i++

        }
        return count === groupSize;

    }
    for (let i = 0; i < hand.length; i++) {
        if (hand[i] >= 0) {
            if (!findSuccessor(hand, groupSize, i)) return false
        }
    }
    return true
};