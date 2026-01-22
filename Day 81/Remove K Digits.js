
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    if (k >= num.length) return '0'

    let st = []
    for (let i = 0; i < num.length; i++) {

        while (k > 0 && st[st.length - 1] > num[i]) {
            st.pop()
            k--
        }

        st.push(num[i]);

    }
    while (st.length > 0 && k > 0) {

        st.pop();
        k--;
    }
    let res = "";

    while (st.length > 0) {
        res += st.pop();
    }
    res = res.replace(/0+$/, '');
    res = res.split('').reverse().join('');
    if (res.length === 0) return "0";
    return res;
};