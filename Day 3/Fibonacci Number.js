
 function f(n){
    if(n===1||n===0){
        return n;
    }
    else return f(n-1)+f(n-2)
 }
var fib = function(n) {
    let v=f(n)
    return v;

};