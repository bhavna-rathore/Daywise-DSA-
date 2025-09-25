
var isPalindrome = function(s) {
   let res= s.replace(/[^a-z0-9]/gi, "").toLowerCase()
   let n = res.length
   for(let i=0; i<n/2; i++){
    if(res[i]!==res[n-i-1]){
        return false
    }
   }
   return true;    
};