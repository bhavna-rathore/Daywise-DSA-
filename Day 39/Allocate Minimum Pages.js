/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {

    countStudents(arr, pages) {
        var n = arr.length; // size of array
        var students = 1;
        var pagesStudent = 0;
        for (var i = 0; i < n; i++) {
            if (pagesStudent + arr[i] <= pages) {
                // add pages to current student
                pagesStudent += arr[i];
            } else {
                // add pages to next student
                students++;
                pagesStudent = arr[i];
            }
        }
        return students;
    }
    findPages(arr, k) {
        // code here
        let n = arr.length
        if (k > n) return -1;

        var low = Math.max(...arr);
        var high = arr.reduce((a, b) => a + b, 0);
        while (low <= high) {
            var mid = Math.floor((low + high) / 2);
            var students = this.countStudents(arr, mid);
            console.log(mid, low, students)
            if (students > k) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return low;
    }
} 