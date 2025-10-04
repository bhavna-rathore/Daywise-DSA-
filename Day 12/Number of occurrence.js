/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
  binarySearch(arr, target, s, e, isRight) {
    let index = -1;
    while (s <= e) {
      let m = Math.floor((s + e) / 2);
      if (arr[m] === target) {
        index = m;
        if (isRight) {
          e = m - 1;
        } else {
          s = m + 1;
        }
      } else if (arr[m] > target) {
        e = m - 1;
      } else {
        s = m + 1;
      }
    }
    return index;
  }
  countFreq(arr, target) {
    // code here
    let s = 0;
    let e = arr.length - 1;
    let last = this.binarySearch(arr, target, s, e, false);
    if (last === 0) {
      return 0;
    }
    let count = last - this.binarySearch(arr, target, s, e, true) + 1;
    return count;
  }
}
