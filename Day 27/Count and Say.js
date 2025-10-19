/**
 * @param {number} n
 * @return {string}
 */
function countHelper(i, n, ans) {
    if (i >= n) return ans;

    let res = "";
    let count = 1;

    for (let j = 1; j <= ans.length; j++) {
        if (ans[j] === ans[j - 1]) {
            count++;
        } else {
            res += count.toString() + ans[j - 1];
            count = 1;
        }
    }

    return countHelper(i + 1, n, res);
}

var countAndSay = function (n) {
    if (n === 1) return "1";
    return countHelper(1, n, "1");
};
