/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
         // Array to collect all values
        let allValues = [];

        // Traverse each list and collect values
        for (let head of lists) {
            while (head !== null) {
                allValues.push(head.val);
                head = head.next;
            }
        }

        // Sort the values
        allValues.sort((a, b) => a - b);

        // Create dummy node for result list
        let dummy = new ListNode(0);
        let curr = dummy;

        // Construct linked list from sorted values
        for (let val of allValues) {
            curr.next = new ListNode(val);
            curr = curr.next;
        }

        // Return head of merged list
        return dummy.next;
    
    
};