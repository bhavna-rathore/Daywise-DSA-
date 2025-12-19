class Solution {
    infixToPrefix(s) {

        const reverseAndSwap = (str) => {
            let arr = str.split('').reverse();
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === '(') arr[i] = ')';
                else if (arr[i] === ')') arr[i] = '(';
            }
            return arr.join('');
        };

        const priority = (op) => {
            if (op === '+' || op === '-') return 1;
            if (op === '*' || op === '/') return 2;
            if (op === '^') return 3;
            return 0;
        };

        let expr = reverseAndSwap(s);
        let stack = [];
        let ans = "";

        for (let i = 0; i < expr.length; i++) {
            let ch = expr[i];

            // Operand
            if (
                (ch >= 'A' && ch <= 'Z') ||
                (ch >= 'a' && ch <= 'z') ||
                (ch >= '0' && ch <= '9')
            ) {
                ans += ch;
            }

            // '('
            else if (ch === '(') {
                stack.push(ch);
            }

            // ')'
            else if (ch === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    ans += stack.pop();
                }
                stack.pop();
            }

            // Operator
            else {
                while (
                    stack.length &&
                    (
                        priority(ch) < priority(stack[stack.length - 1]) ||
                        (priority(ch) === priority(stack[stack.length - 1]) && ch === '^')
                    )
                ) {
                    ans += stack.pop();
                }
                stack.push(ch);
            }
        }

        while (stack.length) {
            ans += stack.pop();
        }

        return ans.split('').reverse().join('');
    }
}
