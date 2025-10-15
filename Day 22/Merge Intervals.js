/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let n = intervals.length;
    let res = []
    let i = 0;
    intervals.sort((a, b) => a[0] - b[0])
    while (i < n) {
        // =console.log(intervals[i][1],intervals[i+1][0])
        if (res.length && res[res.length - 1][1] >= intervals[i][0]) {
            let max = Math.max(res[res.length - 1][1], intervals[i][1])
            // res.push([intervals[i][0],max])
            res[res.length - 1][1] = max;
            i++
        }
        else {
            res.push(intervals[i])
            i++
        }
    }


    return res;

};