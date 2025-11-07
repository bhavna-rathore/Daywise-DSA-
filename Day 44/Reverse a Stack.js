/**
 * @param {number[]} st
 * @returns {void}
 */
class Solution {
    pushatbottom(st, val) {
        if (st.length === 0) {
            st.push(val)
            return;
        }
        let el = st[st.length - 1]
        st.pop()
        this.pushatbottom(st, val)
        st.push(el)
    }
    reverseStack(st) {
        // code here
        if (st.length === 0) return;
        let val = st[st.length - 1]; st.pop();
        this.reverseStack(st);
        this.pushatbottom(st, val);
        return;
    }
}
