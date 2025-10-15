/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    merge(arr, s, mid, e) {
        console.log(s, mid, e);
        let i = s;
        let j = mid + 1;
        let temp = [];
        let count = 0;
        while (i <= mid && j <= e) {
            if (arr[i] <= arr[j]) {
                temp.push(arr[i]);
                i++;

            } else {
                temp.push(arr[j]);
                count += mid - i + 1; // All remaining elements from i to mid are greater than arr[j]
                j++;

            }

        }
        while (i <= mid) {
            temp.push(arr[i])
            i++
        }
        while (j <= e) {
            temp.push(arr[j])

            j++
        }
        for (let i = s; i <= e; i++) {
            arr[i] = temp[i - s];
        }
        console.log(count, '--');
        return count;
    }
    mergeSort(arr, s, e) {
        if (s >= e) return 0
        let mid = Math.floor((s + e) / 2)
        let count = 0;
        count += this.mergeSort(arr, s, mid)
        count += this.mergeSort(arr, mid + 1, e)

        count += this.merge(arr, s, mid, e)
        return count
    }
    inversionCount(arr) {
        // code here
        return this.mergeSort(arr, 0, arr.length - 1)

    }
}