/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map()

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    let sorted = [...map.entries()]
        .sort((a, b) => b[1] - a[1]);

    let res = []
    for (let i = 0; i < k; i++) {
        res.push(sorted[i][0])

    }
    return res
};