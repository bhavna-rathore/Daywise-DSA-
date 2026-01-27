/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    let n = height.length
    if (n == 0) return 0
    let l = 0;
    let r = n - 1
    let leftMax = 0;
    let rightMax = 0;
    let sum = 0
    while (l < r) {
        if (height[l] <= height[r]) {
            if (leftMax > height[l]) {
                sum += leftMax - height[l]
            } else {
                leftMax = height[l]
            }
            l++
        } else {
            if (rightMax > height[r]) {
                sum += rightMax - height[r]
            } else {
                rightMax = height[r]
            }
            r--
        }
    }


    return sum

};