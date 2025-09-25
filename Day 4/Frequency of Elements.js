class Solution {
    countFreq(arr) {
        // code here
        let map= new Map();
        for(let i=0; i<arr.length; i++){
            map.set(arr[i],(map.get(arr[i])||0)+1)
        }
        let a=[]
        map.forEach((key,value)=>a.push([value,key]))
        return a
    }
}