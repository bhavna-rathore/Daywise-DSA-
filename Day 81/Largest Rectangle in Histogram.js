/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let n = heights.length;
    let left = [];
    let right = [];
    let st = [];
    //nearesst smallest to left
    for (let i = 0; i < n; i++) {
        while (st.length && heights[st[st.length - 1]] >= heights[i])
            st.pop()

        left[i] = st.length == 0 ? -1 : st[st.length - 1]
        st.push(i)

    }
    let st1 = []
    //nearesst smallest to right
    for (let i = n - 1; i >= 0; i--) {
        while (st1.length && heights[st1[st1.length - 1]] >= heights[i])
            st1.pop()

        right[i] = st1.length === 0 ? n : st1[st1.length - 1]
        st1.push(i)

    }
    let maxArea = 0
    for (let i = 0; i < n; i++) {
        let width = right[i] - left[i] - 1
        maxArea = Math.max(maxArea, heights[i] * width)
    }
    return maxArea

};