/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let ans = []
    for (let i = 0; i < nums1.length; i++) {
        let found = false;
        let greater = -1;
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                // look ahead
                for (let k = j + 1; k < nums2.length; k++) {
                    if (nums2[k] > nums1[i]) {
                        greater = nums2[k];
                        break;
                    }
                }
                found = true;
                break;
            }
        }
        ans.push(greater);

    }

    return ans


};