/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 // Time O(L + (L - n)) = O(2L -n) = O(2L) where L is the list length
 // Space O(1)

 function removeNthFromEnd1(head, n) {
   var dummy = new ListNode(0) // Dummy node to handle edge case (i.e when list [1])
   dummy.next = head
  
    var first = head, length = 0
    while (first !== null) {
        length++
        first = first.next
    }
    
    var length = length - n // not -1 since we gonna start from the dummy node
    var second = dummy
    while (length > 0)  { // Advance until the predecessor node
        second = second.next
        length--
    }
    second.next = second.next.next
    return dummy.next
  
}

// Space O(1)
// Time O(L) where L is the length of the list
function removeNthFromEnd(head, n) { // One pass
  var dummy = new ListNode(0)
  dummy.next = head

  var slow = dummy, fast = dummy
  // Advance fast pointer to n + 1 steps so slow and dummy are separated by n nodes
  for (let i = 0; i < n + 1 && fast !== null; ++i) {
    fast = fast.next
  }

  // Move fast and slow ptr by advancing both pointers together
  while (fast !== null) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return dummy.next
}
// @lc code=end

