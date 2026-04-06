/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    minHeapToMaxHeap(arr, n) {
        let index = 0; // start from root for heapify-down

        while (true) {
            let largest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < n && arr[left] > arr[largest]) {
                largest = left;
            }

            if (right < n && arr[right] > arr[largest]) {
                largest = right;
            }

            if (largest === index) break;

            [arr[index], arr[largest]] = [arr[largest], arr[index]];
            index = largest;
        }
    }
}