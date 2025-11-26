/**
 * @param {number[][]} mat
 * @returns {string[]}
 */
class Solution {
    ratInMaze(maze) {
        // code here
        let n= maze.length
        function solve(i, j, maze,ans, move,visited){
            if(i===n-1&& j===n-1){
                ans.push(move)
                return;
            }
            if(i+1<n && !visited[i+1][j] && maze[i+1][j]===1){
                visited[i][j]=1
                solve(i+1, j, maze,ans, move+'D', visited)
                visited[i][j]=0
                
            }
               if(j-1>=0 && !visited[i][j-1] && maze[i][j-1]===1){
                visited[i][j]=1
                solve(i, j-1, maze,ans, move+'L', visited)
                visited[i][j]=0
                
            }
               if(j+1<n && !visited[i][j+1] && maze[i][j+1]===1){
                visited[i][j]=1
                solve(i, j+1, maze,ans, move+'R', visited)
                visited[i][j]=0
                
            }   if(i-1>=0 && !visited[i-1][j] && maze[i-1][j]===1){
                visited[i][j]=1
                solve(i-1, j, maze,ans, move+'U', visited)
                visited[i][j]=0
                
            }
            
        }
        
        let ans=[]
        let visited = Array.from({ length: n }, () => Array(n).fill(0));
        
        if(maze[0][0]===1) solve(0, 0, maze,ans, "",visited)
        return ans
    }
}