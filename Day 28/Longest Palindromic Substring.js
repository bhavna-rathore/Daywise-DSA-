/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s){
        return "";

    }
    function expandAroundCenter(s, left, right){
        console.log( left, right)
        while(left>=0 &&right<s.length&&s[left]===s[right]){
            left--
            right++
        }
         console.log( left, right,"--")
        return right-left-1
    }
    let start=0 ;
    let end = 0;
    for(let i=0; i<s.length; i++){
        console.log(i, "=")
        const odd = expandAroundCenter(s, i, i)
        const even = expandAroundCenter(s, i, i+1)
        const maxL = Math.max(odd, even)
        if(maxL>end-start){
          start = i - Math.floor((maxL - 1) / 2);
            end = i + Math.floor(maxL / 2);
        }
    }
    return s.substring(start, end+1)
};