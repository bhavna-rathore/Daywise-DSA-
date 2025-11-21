/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {

    let res = [];
    let sum = 0
    let start = 1
    let arr = []
    function findSum(start, k, n, sum, arr) {
        if (sum === n && arr.length == k) {
            res.push([...arr])
            return;

        } if (sum > n || arr.length > k) {
            return;
        }

        for (let i = start; i <= 9; i++) {
            arr.push(i)
            findSum(i + 1, k, n, sum + i, arr)
            arr.pop()
        }

    }
    findSum(start, k, n, 0, arr)
    return res

};