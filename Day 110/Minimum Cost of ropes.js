class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] <= this.heap[i]) break;

            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    bubbleDown() {
        let i = 0;
        let n = this.heap.length;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}
class Solution {
    minCost(arr) {
        const pq = new MinHeap();

        for (let num of arr) {
            pq.push(num);
        }

        let res = 0;

        while (pq.size() > 1) {
            let first = pq.pop();
            let second = pq.pop();

            let sum = first + second;
            res += sum;

            pq.push(sum);
        }

        return res;
    }
}