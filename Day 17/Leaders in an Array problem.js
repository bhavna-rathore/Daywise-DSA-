
// User function Template for javascript

/**
 * @param {number[]} a
 * @returns {number[]}
 */
class Solution {
    // Function to find the leaders in the array.
    leaders(a) {
        // code here
   let res = [];
    let maxFromRight = -Infinity;

    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] >= maxFromRight) {
            res.push(a[i]);
            maxFromRight = a[i];
        }
    }

    return res.reverse();
        
    }
}
