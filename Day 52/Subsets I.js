class Solution {
    subsetSums(nums) {
        //your code goes here
        let res = []
        nums.sort((a, b) => a - b)
        function backtrack(res, candidates, start, path) {
            let sum = 0
            for (let i = 0; i < path.length; i++) {
                sum += path[i]
            }
            res.push([sum])

            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i - 1]) continue;
                path.push(candidates[i]);
                backtrack(res, candidates, i + 1, path);
                path.pop();
            }

        }
        backtrack(res, nums, 0, [])
        return res
    }
}