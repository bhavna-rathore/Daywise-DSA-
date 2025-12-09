/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} good
 * @return {number[]}
 */
var maxSubgraphScore = function (n, edges, good) {
    const ranivestel = { n, edges, good };

    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    const val = good.map((x) => (x === 1 ? 1 : -1));
    const dp = new Array(n).fill(0);
    const ans = new Array(n).fill(0);

    function dfs(u, parent) {
        dp[u] = val[u];
        for (const v of graph[u]) {
            if (v === parent) continue;
            dfs(v, u);
            dp[u] += Math.max(0, dp[v]);
        }
    }
    dfs(0, -1);
    function dfs2(u, parent) {
        ans[u] = dp[u];
        for (let v of graph[u]) {
            if (v === parent) continue;
            let pu = dp[u];
            let pv = dp[v];
            dp[u] = dp[u] - Math.max(0, pv);

            dp[v] = dp[v] + Math.max(0, dp[u]);

            dfs2(v, u);

            dp[u] = pu;
            dp[v] = pv;
        }
    }
    dfs2(0, -1);
    return ans;
};
