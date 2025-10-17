/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let n = strs.length;

    let firstEl= strs[0]
    let i=1 
   while(i<n && firstEl.length){
    console.log(firstEl, i, strs[i])
    let el= strs[i]
        if(!el.startsWith(firstEl)){
            firstEl=firstEl.substring(0, firstEl.length-1)
        }
      else  i++;
    }
    return firstEl;
    
};