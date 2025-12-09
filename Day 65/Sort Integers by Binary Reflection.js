/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function (nums) {

    function binaryReflection(n) {
        let bin = n.toString(2);
        let rev = bin.split('').reverse().join('');
        return parseInt(rev, 2);
    }

    return nums.sort((a, b) => {
        let refA = binaryReflection(a);
        let refB = binaryReflection(b);

        if (refA === refB) {
            return a - b;
        }
        return refA - refB;
    });

};