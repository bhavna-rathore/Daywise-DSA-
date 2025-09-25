class Solution {
    findUnion(a, b) {
        // code here
        const newset =new Set()
        for(let i=0; i<a.length;i++){
            newset.add(a[i]);
        }
        for(let j=0; j<b.length; j++){
            newset.add(b[j])
        }
        return Array.from(newset);
    }
}