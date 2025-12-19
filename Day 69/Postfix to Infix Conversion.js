// User function Template for javascript
/**
 * @param {string} postfix
 * @returns {string}
 */

class Solution {
    // Function to convert postfix expression to infix expression.
    postToInfix(postfix) {
        // your code here
        let stack = []
        for (let i = 0; i < postfix.length; i++) {
            if (
                (postfix[i] >= 'A' && postfix[i] >= 'Z')
                || (postfix[i] >= 'a' && postfix[i] >= 'z')
                || (postfix[i] >= '0' && postfix[i] >= '9')
            ) {
                stack.push(postfix[i])
            } else {
                let el1 = stack[stack.length - 1]
                stack.pop()
                let el2 = stack[stack.length - 1]
                stack.pop()
                let com = '(' + el2 + postfix[i] + el1 + ')'
                stack.push(com)
            }
        }

        return stack[stack.length - 1]
    }
}