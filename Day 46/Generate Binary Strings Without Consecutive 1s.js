class Solution {
    binaryStrings(n, s, res, start) {
        if (n <= start) {
            res.push(s.join(' '))
            return
        }
        this.binaryStrings(n, s, res, start + 1)
        s[start] = '1'
        this.binaryStrings(n, s, res, start + 2)
        s[start] = '0'

    }
    generateBinaryStrings(n) {
        // Your code goes here
        let res = []
        let s = Array(n).fill('0');
        let start = 0
        this.binaryStrings(n, s, res, start)
        return res
    }
}
