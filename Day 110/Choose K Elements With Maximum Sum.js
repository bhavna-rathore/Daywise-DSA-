/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var findMaxSum = function(nums1, nums2, k) {
    let n = nums1.length;

    let pairs = [];
    for (let i = 0; i < n; i++) {
        pairs.push([nums1[i], nums2[i], i]);
    }

    pairs.sort((a, b) => a[0] - b[0]);

    let res = new Array(n).fill(0);
    let heap = [];
    let sum = 0;

    let i = 0;

    while (i < n) {
        let j = i;

        while (j < n && pairs[j][0] === pairs[i][0]) {
            let idx = pairs[j][2];
            res[idx] = sum; 
            j++;
        }
        for (let t = i; t < j; t++) {
            let val2 = pairs[t][1];

            heap.push(val2);
            sum += val2;

            heap.sort((a, b) => a - b);

            if (heap.length > k) {
                sum -= heap.shift();
            }
        }

        i = j;
    }

    return res;
};