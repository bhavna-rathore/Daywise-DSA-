/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    kthSmallest(arr, k) {
        let heap = []
        function insert(heap, el) {
            heap.push(el)
            let index = heap.length - 1
            while (index > 0 && heap[Math.floor((index - 1) / 2)] <= heap[index]) {
                let temp = heap[index]
                heap[index] = heap[Math.floor((index - 1) / 2)]
                heap[Math.floor((index - 1) / 2)] = temp
                index = Math.floor((index - 1) / 2)
            }
        }

        function heapifyDown(i) {
            let n = heap.length;

            while (true) {
                let largest = i;
                let left = 2 * i + 1;
                let right = 2 * i + 2;

                if (left < n && heap[left] > heap[largest]) largest = left;
                if (right < n && heap[right] > heap[largest]) largest = right;

                if (largest === i) break;

                [heap[i], heap[largest]] = [heap[largest], heap[i]];
                i = largest;
            }
        }
        function pop() {
            let last = heap.pop()
            if (heap.length == 0) return
            heap[0] = last;
            heapifyDown(0)

        }

        for (let i = 0; i < arr.length; i++) {
            insert(heap, arr[i]);
            if (heap.length > k) {
                pop()
            }
        }

        return heap[0]

    }
}