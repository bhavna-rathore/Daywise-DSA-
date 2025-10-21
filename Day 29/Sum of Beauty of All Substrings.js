/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {

    let totalBeauty= 0
   for (let i = 0; i < s.length; i++) {
        let freq = new Array(26).fill(0);
        for (let j = i; j < s.length; j++) {
            freq[s.charCodeAt(j) - 97]++;

            let maxFreq = 0;
            let minFreq = Infinity;

            for (let count of freq) {
                if (count > 0) {
                    maxFreq = Math.max(maxFreq, count);
                    minFreq = Math.min(minFreq, count);
                }
            }

            totalBeauty += maxFreq - minFreq;
        }
    }

    return totalBeauty;
};