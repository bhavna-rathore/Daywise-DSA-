// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} x
 * @returns {number}
 */

class Solution {
  findFloor(arr, x) {
    // your code here
    let s = 0;
    let e = arr.length - 1;
    let floorIndex = -1;

    while (s <= e) {
      let m = Math.floor((s + e) / 2);
      if (arr[m] > x) {
        e = m - 1;
      } else {
        floorIndex = m;
        s = m + 1;
      }
    }
    return floorIndex;
  }
}
