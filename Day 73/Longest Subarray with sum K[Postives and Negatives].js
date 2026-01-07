class SubarraySolver {
    getLongestSubarray(a, k) {
        const n = a.length;
        const sumMap = new Map(); 
        let sum = 0;    
        let maxLen = 0;  

        for (let i = 0; i < n; i++) {
            sum += a[i]; 
            if (sum === k) {
                maxLen = i + 1;
            }

            const rem = sum - k;
            if (sumMap.has(rem)) {
                const len = i - sumMap.get(rem);
                maxLen = Math.max(maxLen, len);
            }

            if (!sumMap.has(sum)) {
                sumMap.set(sum, i);
            }
        }

        return maxLen;
    }
}
