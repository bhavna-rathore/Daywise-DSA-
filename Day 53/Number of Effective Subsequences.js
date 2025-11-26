/**
 * @param {number[]} nums
 * @return {number}
 */
var countEffective = function (nums) {

    const MOD = 1_000_000_007;
    const n = nums.length;

    let FULL = 0;
    for (let v of nums) FULL |= v;
    if (FULL === 0) return 0;

    const bitIndex = new Map();
    let M = 0;
    for (let b = 0; b < 31; b++) {
        if ((FULL >>> b) & 1) {
            bitIndex.set(b, M++);
        }
    }

    const size = 1 << M;
    const freq = new Array(size).fill(0);

    for (let v of nums) {
        let mask = 0;
        for (let [origBit, idx] of bitIndex.entries()) {
            if ((v >>> origBit) & 1) mask |= (1 << idx);
        }
        freq[mask]++;
    }

    const dp = freq.slice();
    for (let i = 0; i < M; i++) {
        for (let mask = 0; mask < size; mask++) {
            if (mask & (1 << i)) dp[mask] += dp[mask ^ (1 << i)];
        }
    }

    const pow2 = new Array(n + 1);
    pow2[0] = 1;
    for (let i = 1; i <= n; i++) pow2[i] = (pow2[i - 1] * 2) % MOD;

    const fullMask = size - 1;
    let ans = 0;

    for (let T = 1; T <= fullMask; T++) {
        const comp = fullMask ^ T;

        const noneHave = dp[comp];
        const Usize = n - noneHave;

        const term = pow2[n - Usize];

        const bitsCount = (T.toString(2).match(/1/g) || []).length;
        if (bitsCount % 2 === 1) {
            ans += term;
            if (ans >= MOD) ans -= MOD;
        } else {
            ans -= term;
            if (ans < 0) ans += MOD;
        }
    }

    return ans % MOD;
};