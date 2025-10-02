
var generate = function(numRows) {
    let resArray=[]
   for(let j=numRows; j>=1; j--){
     let res=[1]
  let ans=1
    //Printing the rest of the part:
    for (let i = 1; i < j; i++) {
      ans = ans * (j - i);
      ans = ans / i;
       res.push(ans)
    //    console.log(ans)
    }
    resArray.push(res)}
    return resArray.reverse();
};