/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
     const MOD = 1_000_000_007;
    
    
    function sumAndMultiplyOfQuery(s, start, end) {
        let xMod = 0;      
        let sum = 0;        
        let hasNonZero = false;

        for (let i = start; i <= end; i++) {
            let digit = s.charCodeAt(i) - 48; 

            if (digit !== 0) {
                hasNonZero = true;
                xMod = (xMod * 10 + digit) % MOD;
                sum += digit;
            }
        }

        if (!hasNonZero) return 0;

        return (xMod * sum) % MOD;
    }
    let ans=[]
    
    for(let i=0 ; i<queries.length; i++){
        let [l, r] = queries[i];
        let res= sumAndMultiplyOfQuery(s ,l, r)
        ans.push(res)
        
    }
    return ans
    
};