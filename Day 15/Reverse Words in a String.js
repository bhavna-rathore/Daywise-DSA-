/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) { 
    let res=[]
    let ans=''
    for(let i=0; i<=s.length;i++){
        if(s[i]===' '||i===s.length){
            if(ans!==''){
             res.push(ans);
            ans=''
           }
        }else{
            ans=ans+s[i]
        }
    }
    console.log(res)
    return res.reverse().join(" ")
    
};