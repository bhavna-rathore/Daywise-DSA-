
class Solution {
    /**
    * @param number[] stations
    * @param number k

    * @returns float
    */
    noOfGasStationRequired(stations, mid) {
        let count = 0;
        for (let i = 1; i < stations.length; i++) {
            const gap = stations[i] - stations[i - 1];
            count += Math.floor(gap / mid);
        }
        return count
    }
    minMaxDist(stations, K) {
        // code here
        let n = stations.length
        let s = 0;
        let e = 0
        const EPSILON = 1e-6;
        let ans = 0

        for (let i = 1; i < n; i++) {
            let distance = stations[i] - stations[i - 1]
            e = Math.max(e, distance)
        }
        while ((e - s) > EPSILON) {
            let mid = (s + e) / 2

            let noOfGasStation = this.noOfGasStationRequired(stations, mid)
            if (noOfGasStation > K) {
                s = mid
            } else {
                e = mid

            }
        }

        return e

    }
}
