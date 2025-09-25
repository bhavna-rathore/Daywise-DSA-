  function  largest(arr) {
        // code here
          let max=arr[0];
        for(let i=1; i<arr.length; i++){
            if(max<arr[i]){
                max=arr[i];
            }
        }
        return max;
    }