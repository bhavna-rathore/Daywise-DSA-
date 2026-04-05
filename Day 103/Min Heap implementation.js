class minHeap {
    constructor() {
        // Initialize your data members
        this.heap = [];
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2)

        while (index > 0 && this.heap[parent] > this.heap[index]) {
            this.swap(parent, index);
            index = parent
            parent = Math.floor((index - 1) / 2)

        }

    }

    heapifyDown(index) {
        let size = this.heap.length;

        while (true) {
            let smallest = index
            let left = 2 * index + 1
            let right = 2 * index + 2

            if (left < size && this.heap[left] < this.heap[smallest]) {
                smallest = left
            }
            if (right < size && this.heap[right] < this.heap[smallest]) {
                smallest = right
            }

            if (smallest === index) break;
            this.swap(index, smallest);
            index = smallest


        }
    }



    push(x) {
        // Insert x into the heap
        this.heap.push(x);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        // Remove the top (minimum) element
        if (this.heap.length <= 0) {
            return -1

        }
        let min = this.heap[0]
        let last = this.heap.pop()

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return min;


    }

    peek() {
        return this.heap.length === 0 ? -1 : this.heap[0]
        // Return the top element or -1 if empty
    }

    size() {
        // Return the number of elements in the heap
        return this.heap.length
    }
}