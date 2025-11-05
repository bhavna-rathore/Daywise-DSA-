
class Solution {
    /**
    * @param number[] stations
    * @param number k

    * @returns float
    */
    minMaxDist(stations, K) {
        // code here
        let n = stations.length

        let howMany = new Array(n - 1).fill(0)

        for (let i = 0; i < K; i++) {
            let maxSection = 0;
            let maxIndex = -1
            for (let i = 0; i < n - 1; i++) {
                let diff = stations[i + 1] - stations[i]
                let maxSectionLength = diff / (howMany[i] + 1)
                if (maxSection < maxSectionLength) {
                    maxSection = maxSectionLength
                    maxIndex = i
                }
            }
            howMany[maxIndex]++
        }

        let maxAns = -1
        for (let i = 0; i < n - 1; i++) {
            let diff = stations[i + 1] - stations[i]
            let maxSectionLength = diff / (howMany[i] + 1)
            maxAns = Math.max(maxAns, maxSectionLength)
        }
        return maxAns !== -1 ? maxAns : 0

    }
}
