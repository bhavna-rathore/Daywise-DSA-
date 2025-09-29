class Solution {
    // Function to implement selection sort
    selectionSort(arr) {
        // your code here
        let n= arr.length
        
        for(let i=0; i<n; i++){
            let minIndex = i
            for(let j=i+1; j<n; j++){
                if(arr[j]<arr[minIndex])
                minIndex= j
                // console.log(j,'-')
            }
            [arr[i], arr[minIndex]]= [arr[minIndex],arr[i]]
        }
        
    }
}