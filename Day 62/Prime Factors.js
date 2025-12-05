class Solution {
    primeFac(n) {
        // code here
        let ans = []
        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                ans.push(i)
                while (n % i == 0) {
                    n = n / i;
                }
            }
        } 
        if (n > 1) ans.push(n)
        return ans
    }
}