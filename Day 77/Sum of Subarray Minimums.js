/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let ans = []
       let n = arr.length;
       
       let mod = 1e9 + 7;
       let sum = 0;
       for (let i = 0; i < n; i++) {
           let mini = arr[i];
           for (let j = i; j < n; j++) {
               mini = Math.min(mini, arr[j]);

               sum = (sum + mini) % mod;
           }
       }

       return sum;
};