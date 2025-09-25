
    function search(arr, x) {
        let N=arr.length; //First We need to know the size of array
        for(let i=0; i<N; i++){
            if(arr[i]== x){  //Compare here to get a target value 
                return i;
            }
        }
        return -1;
    }
