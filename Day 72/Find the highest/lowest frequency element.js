class FrequencyCounter {
    Frequency(arr) {
        const freqMap = new Map();

        for (let num of arr) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        let maxFreq = 0, minFreq = arr.length;
        let maxEle = 0, minEle = 0;

        for (let [el, count] of freqMap.entries()) {
            if (count > maxFreq) {
                maxFreq = count;
                maxEle = el;
            }

            if (count < minFreq) {
                minFreq = count;
                minEle = el;
            }
        }

        return [minEle, maxEle]
    }
}

