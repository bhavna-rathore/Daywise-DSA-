class Solution {
    partition(arr, low, high) {
        // code here
        let i=low;
        let j=high;
        let pivot=arr[low]
        // console.log(i,j)
        while(i<j){
            while(pivot>=arr[i]&&i<=high-1){
                i++
            }
            while(pivot<arr[j]&& j>=low+1){
                j--
            }
            //  console.log(i,j,"=")
           if(i<j) [arr[i], arr[j]]=[arr[j], arr[i]]
        }
        [arr[j], arr[low]]= [arr[low],arr[j]]
        return j;
        
        
    }

    quickSort(arr, low, high) {
        if(low<high){
            let pivotIndex= this.partition(arr,low, high)
            this.quickSort(arr,low,pivotIndex-1);
            this.quickSort(arr, pivotIndex+1,high)
        }
        
        // code here
    }
}class Solution {
    partition(arr, low, high) {
        // code here
        let i=low;
        let j=high;
        let pivot=arr[low]
        // console.log(i,j)
        while(i<j){
            while(pivot>=arr[i]&&i<=high-1){
                i++
            }
            while(pivot<arr[j]&& j>=low+1){
                j--
            }
            //  console.log(i,j,"=")
           if(i<j) [arr[i], arr[j]]=[arr[j], arr[i]]
        }
        [arr[j], arr[low]]= [arr[low],arr[j]]
        return j;
        
        
    }

    quickSort(arr, low, high) {
        if(low<high){
            let pivotIndex= this.partition(arr,low, high)
            this.quickSort(arr,low,pivotIndex-1);
            this.quickSort(arr, pivotIndex+1,high)
        }
        
        // code here
    }
}