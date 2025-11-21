/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = []
    function findArr(start, arr, sum) {
        if (sum === target) {
            res.push([...arr])
        }
        if (sum > target) {
            return
        }
        for (let i = start; i < candidates.length; i++) {
            arr.push(candidates[i]);
            findArr(i, arr, sum + candidates[i]);
            arr.pop();
        }
    }

    findArr(0, [], 0)
    return res

};