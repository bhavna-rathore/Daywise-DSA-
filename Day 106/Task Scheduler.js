/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let countArr = new Array(26).fill(0)
    for (let task of tasks) {
        countArr[task.charCodeAt(0) - 'A'.charCodeAt(0)]++  // for the frequecy

    }
    let maxHeap = new MaxPriorityQueue()
    for (let i = 0; i < 26; i++) {
        if (countArr[i] > 0) {
            maxHeap.enqueue(countArr[i])
        }
    }

    let time = 0;
    let queue = new Queue();

    while (maxHeap.size() > 0 || queue.size() > 0) {
        time++
        if (maxHeap.size() > 0) {
            let maxFreqRem = maxHeap.dequeue() - 1
            if (maxFreqRem != 0) {
                queue.push([maxFreqRem, time + n])
            }
        }
        if (queue.size() > 0 && queue.front()[1] === time) {
            maxHeap.enqueue(queue.pop()[0])
        }
    }
    return time

};