class Solution {
    bubbleSort(arr,n) {
        if(n==1){
            return
        }
        let count=0
            for(let j=0; j<=i;j++){
                if(arr[j]>arr[j+1]){
                    [arr[j], arr[j+1]]= [arr[j+1],arr[j]]
                    count++
            }
            if(count==0)
                return
        bubbleSort(arr , n-1)
    }
    }
}