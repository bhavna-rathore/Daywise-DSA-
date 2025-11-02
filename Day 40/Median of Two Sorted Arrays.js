/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let n = nums1.length, m = nums2.length;
    let total = n + m;
    let mid1 = Math.floor((total - 1) / 2);
    let mid2 = Math.floor(total / 2);

    let i = 0, j = 0, count = 0;
    let a = 0, b = 0;

    while (i < n || j < m) {
        let val;
        if (j >= m || (i < n && nums1[i] <= nums2[j])) {
            val = nums1[i++];
        } else {
            val = nums2[j++];
        }

        if (count === mid1) a = val;
        if (count === mid2) {
            b = val;
            break;
        }
        count++;
    }

    return total % 2 === 0 ? (a + b) / 2 : b;
};
