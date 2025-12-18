
/**
 * @param {string} s
 * @returns {string}
 */

class Solution {
    infixToPostfix(s) {
        // code here
        let ans=""
        let stack =[];
          const priority = (op) => {
            if (op === '+' || op === '-') return 1;
            if (op === '*' || op === '/') return 2;
            if (op === '^') return 3;
            return 0;
        };
        for(let i=0; i<s.length; i++){
            if((s[i]>='A'&&s[i]<="Z")||(s[i]>='a'&&s[i]<="z")||(s[i]>='0'&&s[i]<="9")){
                ans+=s[i]
            }
            else if(s[i]==="("){
                stack.push(s[i])
            }else if(s[i]===")"){
                while( stack.length && stack[stack.length - 1] !== '('){
                    let el = stack[stack.length - 1]
                    ans+=el
                    stack.pop()
                }
                  stack.pop()
                    
                
            }else {
while (
  stack.length &&
  (
    priority(s[i]) < priority(stack[stack.length - 1]) ||
    (priority(s[i]) === priority(stack[stack.length - 1]) && s[i] !== '^')
  )
) {
  ans += stack.pop();
}

                stack.push(s[i])
                
            }
        }
        while(stack.length){
            ans+=stack[stack.length - 1] 
            stack.pop()
        }
        return ans
    }
}
