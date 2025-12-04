class Solution {
    twoOddNum(arr) {
        // code here
        // arr.sort((a,b)=>a-b)
        let ans = []
        let xorAll = 0;
        for (let i = 0; i < arr.length; i++) {
            xorAll ^= arr[i]
        }
        let rightmostBit = (xorAll & xorAll - 1) ^ xorAll
        let xorA = 0;
        let xorB = 0

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] & rightmostBit) xorA ^= arr[i]
            else xorB ^= arr[i]
        }
        ans.push(xorA)
        ans.push(xorB)
        ans.sort((a, b) => b - a);
        return ans;
    }
}
