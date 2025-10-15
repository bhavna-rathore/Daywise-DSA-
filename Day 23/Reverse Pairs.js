/**
 * @param {number[]} nums
 * @return {number}
 */
 var reversePairs = function(nums) {
    function merge(nums, s, mid, e) {
        
        console.log(s, mid, e);
        let i = s;
        let j = mid + 1;
        let temp = [];
        let count = 0;
            for (let i = s; i <= mid; i++) {
          while(j<=e && nums[i] > 2 * nums[j]){
                j++;
            }
             count += j - (mid + 1);
        }
         i = s;
        j = mid + 1;
        while (i <= mid && j <= e) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i]);
                i++;

            } else {
                temp.push(nums[j]);
                j++;
            }
        }
        while (i <= mid) {
            temp.push(nums[i])
            i++
        }
        while (j <= e) {
            temp.push(nums[j])

            j++
        }
    
        for (let i = s; i <= e; i++) {
            nums[i] = temp[i - s];
        }

        console.log(count, '--');
        return count;
    }
    function mergeSort(nums, s, e) {
        if (s >= e) return 0
        let mid = Math.floor((s + e) / 2)
        let count = 0;
        count += mergeSort(nums, s, mid)
        count += mergeSort(nums, mid + 1, e)

        count += merge(nums, s, mid, e)
        return count
    }

 return mergeSort(nums, 0, nums.length - 1)
};
