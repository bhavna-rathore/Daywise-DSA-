function shipWithinDays(weights, days) {
    let min = Math.min(...weights);  
    let max = weights.reduce((a, b) => a + b, 0);

    function findDays(weights, capacity) {
        let daysNeeded = 1;
        let current = 0;

        for (let w of weights) {
            if (current + w > capacity) {
                daysNeeded++;
                current = 0;
            }
            current += w;
        }

        return daysNeeded;
    }

    let ans = max;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let requiredDays = findDays(weights, mid);

        if (requiredDays <= days) {
            ans = mid;          
            max = mid - 1;      
        } else {
            min = mid + 1;     
        }
    }
    return ans;
}
