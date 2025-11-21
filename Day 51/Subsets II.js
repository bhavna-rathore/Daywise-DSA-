/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = []
    nums.sort((a, b) => a - b)
    function backtrack(res, candidates, start, path) {
        res.push([...path])

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            path.push(candidates[i]);
            backtrack(res, candidates, i + 1, path);
            path.pop();
        }

    }
    backtrack(res, nums, 0, [])
    return res

};