// User function Template for javascript
/**
 * @param {string} post_exp
 * @returns {string}
 */

class Solution {
    // Function to find a continuous sub-array which adds up to a given number.
    postToPre(post_exp) {
        
        let stack = []

        for (let i = 0; i < post_exp.length; i++) {
            if ((post_exp[i] >= 'A' && post_exp <= "Z") ||
                (post_exp[i] >= 'a' && post_exp <= "z") ||
                (post_exp[i] >= '0' && post_exp <= "9")) {
                stack.push(post_exp[i])

            } else {
                let el1 = stack[stack.length - 1]
                stack.pop()
                let el2 = stack[stack.length - 1]
                stack.pop()
                let com = post_exp[i] + el2 + el1
                stack.push(com)
            }
        }
        return stack[stack.length - 1]

    }
}