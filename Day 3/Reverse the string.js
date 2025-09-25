 const reverse=(s,i,n)=>{
     if(i>=n){
           return;
        }
        [s[i],s[n]]=[s[n],s[i]];
       reverse(s,i+1,n-1)
}

var reverseString = function(s) {
    let n=s.length-1
  reverse(s,0,n)
    
};