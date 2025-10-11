/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let s=0
        let e= x-1
        let m= Math.floor((s+e)/2)
        let res=1
if(x==1 ||x==0){
    return x
}
        while(s<=e){
            if(m*m<=x){
                res=m;
                s=m+1
            }else{
                e= m-1
            }
        m= Math.floor((s+e)/2)
        }
      return res;
    }