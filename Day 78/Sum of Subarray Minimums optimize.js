class Solution {
    findNSE(arr) {

        const n = arr.length;
        const ans = new Array(n).fill(0);
        const st = [];

        for (let i = n - 1; i >= 0; i--) {
            while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
                st.pop();
            }
            ans[i] = st.length > 0 ? st[st.length - 1] : n;
            st.push(i);
        }
        return ans;
    }

    findPSEE(arr) {
        const n = arr.length;

        const ans = new Array(n).fill(0);
        const st = [];

        for (let i = 0; i < n; i++) {
            while (st.length > 0 && arr[st[st.length - 1]] > arr[i]) {
                st.pop();
            }

            ans[i] = st.length > 0 ? st[st.length - 1] : -1;
            st.push(i);
        }

        return ans;
    }

    sumSubarrayMins(arr) {

        const nse = this.findNSE(arr);
        const psee = this.findPSEE(arr);
        const n = arr.length;

        const mod = 1e9 + 7;

        let sum = 0;
        for (let i = 0; i < n; i++) {
            const left = i - psee[i];
            const right = nse[i] - i;
            const freq = left * right * 1;
            const val = (freq * arr[i]) % mod;
            sum = (sum + val) % mod;
        }

        return sum;
    }
}

