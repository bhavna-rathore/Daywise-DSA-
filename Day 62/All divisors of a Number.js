class Solution {
    
    print_divisors(n) {
        // code here
        let ans = []
        for (let i = 1; i <= Math.sqrt(n); i++) {

            if (n % i === 0) {
                ans.push(i)
                if (i !== n / i) {
                    ans.push(n / i); 
                }
            }
        }
        return ans.sort((a, b) => a - b)

    }
}