/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
    function findNSE(nums) {
        let n = nums.length;
        let ans = new Array(n).fill(0)
        let st = []
        for (let i = n - 1; i >= 0; i--) {
            while (st.length > 0 && nums[st[st.length - 1]] >= nums[i]) {
                st.pop();
            };
            ans[i] = st.length > 0 ? st[st.length - 1] : n;
            st.push(i)
        }
        return ans;
    }
    function findNGE(nums) {
        let n = nums.length;
        let ans = new Array(n).fill(0)
        let st = []
        for (let i = n - 1; i >= 0; i--) {
            while (st.length > 0 && nums[st[st.length - 1]] <= nums[i]) {
                st.pop();
            };
            ans[i] = st.length > 0 ? st[st.length - 1] : n;
            st.push(i)
        }
        return ans;
    }
    function findPSEE(nums) {
        let n = nums.length;
        let ans = new Array(n).fill(0)
        let st = []
        for (let i = 0; i < n; i++) {
            while (st.length > 0 && nums[st[st.length - 1]] > nums[i]) {
                st.pop();
            };
            ans[i] = st.length > 0 ? st[st.length - 1] : -1;
            st.push(i)
        }
        return ans;
    }
    function findPGEE(nums) {
        let n = nums.length;
        let ans = new Array(n).fill(0)
        let st = []
        for (let i = 0; i < n; i++) {
            while (st.length > 0 && nums[st[st.length - 1]] < nums[i]) {
                st.pop();
            };
            ans[i] = st.length > 0 ? st[st.length - 1] : -1;
            st.push(i)
        }
        return ans;
    }
    function sumSubarrayMins(nums) {

        const nse = findNSE(nums);
        const psee = findPSEE(nums);
        const n = nums.length;
        let sum = 0;

        for (let i = 0; i < n; i++) {
            const left = i - psee[i];
            const right = nse[i] - i;
            const val = ((left * right) * nums[i]);
            sum += val;
        }
        return sum;
    }
    function sumSubarrayMaxs(nums) {

        const nse = findNGE(nums);
        const psee = findPGEE(nums);
        const n = nums.length;
        let sum = 0;

        for (let i = 0; i < n; i++) {
            const left = i - psee[i];
            const right = nse[i] - i;
            const val = ((left * right) * nums[i]);
            sum += val;
        }
        return sum;
    }
    return (sumSubarrayMaxs(nums) - sumSubarrayMins(nums));

};