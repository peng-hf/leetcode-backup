/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
// Space O(1)
// Time O(n)
function removeElements(head, val) {
  if (head === null) return head

  const dummy = new ListNode(0)
  dummy.next = head

  var cur = head, pred = dummy
  while (cur !== null) {
    if (cur.val === val) {
      pred.next = cur.next
    } else {
      pred = cur
    }
    cur = cur.next
  }
  return dummy.next
}
// @lc code=end

