class Solution {
    graphColoring(V, edges, m) {
       
        let adj = Array.from({ length: V }, () => []);

        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        let color = Array(V).fill(0);

        function isSafe(node, col) {
            for (let nei of adj[node]) {
                if (color[nei] === col) return false;
            }
            return true;
        }

        function solve(node) {
            if (node === V) return true;

            for (let col = 1; col <= m; col++) {
                if (isSafe(node, col)) {
                    color[node] = col;

                    if (solve(node + 1)) return true;

                    color[node] = 0; // backtrack
                }
            }

            return false;
        }

        return solve(0);
    }
}
