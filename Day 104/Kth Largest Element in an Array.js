/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let heap = []
    function insert(heap, el) {
        heap.push(el)
        let index = heap.length - 1
        while (index > 0 && heap[Math.floor((index - 1) / 2)] > heap[index]) {
            let temp = heap[index]
            heap[index] = heap[Math.floor((index - 1) / 2)]
            heap[Math.floor((index - 1) / 2)] = temp
            index = Math.floor((index - 1) / 2)
        }
    }

    function heapifyDown(i) {
        let n = heap.length;

        while (true) {
            let smallest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < n && heap[left] < heap[smallest]) smallest = left;
            if (right < n && heap[right] < heap[smallest]) smallest = right;

            if (smallest === i) break;

            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            i = smallest;
        }
    }
    function pop() {
        let last = heap.pop()
        if (heap.length == 0) return
        heap[0] = last;
        heapifyDown(0)

    }

    for (let i = 0; i < nums.length; i++) {
        insert(heap, nums[i]);
        if (heap.length > k) {
            pop()
        }
    }

return heap[0]

};