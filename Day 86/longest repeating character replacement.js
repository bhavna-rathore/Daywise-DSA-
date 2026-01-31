/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
     let maxLength = 0;

        for (let i = 0; i < s.length; i++) {
            const freq = new Array(26).fill(0);
            let maxFreq = 0;
            for (let j = i; j < s.length; j++) {
                freq[s.charCodeAt(j) - 65]++;
                maxFreq = Math.max(maxFreq, freq[s.charCodeAt(j) - 65]);

                if ((j - i + 1)-maxFreq <= k) {
                    maxLength = Math.max(maxLength, windowSize);
                }
            }
        }

        return maxLength;

};