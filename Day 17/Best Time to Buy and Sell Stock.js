/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfitValue = 0;
    let n = prices.length;
    let lowerValue = Number.MAX_SAFE_INTEGER;
    let higherValue =0;
    
    for(let i=0; i < n; i++){
        if(prices[i]<lowerValue){
            lowerValue=prices[i]
            higherValue=0;
        }
        else if(prices[i]>higherValue){
            higherValue=prices[i]
        }
        maxProfitValue = Math.max((higherValue - lowerValue) , maxProfitValue)    
    }
    return maxProfitValue
};