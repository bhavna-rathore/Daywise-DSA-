/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let arr = []
    let res = []
    function arrOfSubset(nums, start, arr, res) {
        if (nums.length <= start) {
            res.push([...arr])
            return
        }
        arrOfSubset(nums, start + 1, arr, res)
        arr.push(nums[start])
        arrOfSubset(nums, start + 1, arr, res)
        arr.pop()
    }
    arrOfSubset(nums, 0, arr, res)
    return res

};