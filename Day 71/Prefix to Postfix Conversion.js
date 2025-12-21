// User function Template for javascript
/**
 * @param {string} pre_exp
 * @returns {string}
 */

class Solution {
    // Function to convert prefix expression to postfix expression.
    preToPost(pre_exp) {
        // your code here
        let stack = []

        for (let i = pre_exp.length - 1; i >= 0; i--) {
            if ((pre_exp[i] >= 'A' && pre_exp <= "Z") ||
                (pre_exp[i] >= 'a' && pre_exp <= "z") ||
                (pre_exp[i] >= '0' && pre_exp <= "9")) {
                stack.push(pre_exp[i])

            } else {
                let el1 = stack[stack.length - 1]
                stack.pop()
                let el2 = stack[stack.length - 1]
                stack.pop()
                let com = el1 + el2 + pre_exp[i]
                stack.push(com)
            }
        }
        return stack[stack.length - 1]
    }
}