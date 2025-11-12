/**
 * @param {number[]} st
 * @returns {void}
 */

class Solution {
    merging(stack, el) {
        if (stack.length == 0 || stack[stack.length - 1] <= el) {
            stack.push(el)
            return
        }
        let top = stack.pop()
        this.merging(stack, el)
        stack.push(top)

    }
    sortStack(st) {
        // code here
        if (st.length === 0) return;


        let el = st.pop()
        this.sortStack(st)
        this.merging(st, el)

    }
}
