const printTilln=(i,n,result = [])=>{
     if(i===n){
         result.push(i)
            //  console.log(i)
             return result;
        }
        //  console.log(i)
           result.push(i)
        printTilln(i+1,n, result)
        return result
       
}
class Solution {
    printTillN(n) {
        let i=1
        // code here
       const result= printTilln(1,n)
       console.log(result.join(" "))
        
    }
}
