/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
 * @return {ListNode}
 */
// Time O(n)
// Space O(1)
var oddEvenList = function(head) {
  if (head === null || head.next === null) {
    return head
  }
  var oddPtr = head, evenPtr = head.next, headEvenPtr = head.next
  while (evenPtr !== null && evenPtr.next !== null) {
    oddPtr.next = evenPtr.next
    evenPtr.next = evenPtr.next.next
    oddPtr = oddPtr.next
    evenPtr = evenPtr.next
  }
  oddPtr.next = headEvenPtr
  return head
};
// @lc code=end

