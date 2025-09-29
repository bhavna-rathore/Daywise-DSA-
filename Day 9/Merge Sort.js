
class Solution {
    mergeArray(arr, l, mid, r){
        // console.log(mid)
        let temp=[];
        let i=l;
        let j=mid+1;
        
        while(i<=mid &&j<=r){
            if(arr[i]<=arr[j]){
                temp.push(arr[i])
                i++
            }else{
                temp.push(arr[j])
                j++
            }
        }
        
        while(j<=r){
            temp.push(arr[j])
            j++
        }
        while(i<=mid){
            temp.push(arr[i])
            i++
        }
        for(let i=l; i<=r; i++ ){
            arr[i]=temp[i-l]
        }
        
    };
     sort(arr, l, r){
            if(l>=r){
            return ;
        }
        let mid = Math.floor((l+r)/2);
        //   console.log(l , r, mid)
        this.sort(arr, l, mid)
        this.sort(arr, mid+1, r)
        this.mergeArray(arr, l, mid, r);
    };
    mergeSort(arr, l, r) {
        // code here
        // console.log(l,r)
        this.sort(arr, l, r)
    
    }
}