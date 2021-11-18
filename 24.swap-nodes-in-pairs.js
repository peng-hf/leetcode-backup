/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
//  var swapPairs = function(head) {
//   var cur = head
//   while (cur !== null && cur.next !== null) {
//     const curVal = cur.val
//     cur.val = cur.next.val
//     cur.next.val = curVal
//     cur = cur.next.next
//   }
//   return head
// };

function swapPairs(head) {
  function recurse(ptr) {
    if (ptr === null || ptr.next === null) return head
    const tmpVal = ptr.val
    ptr.val = ptr.next.val
    ptr.next.val = tmpVal
    recurse(ptr.next.next)
  }
  
  recurse(head)
  return head
}

function swapPairs(head) {
  function recurse(ptr) {
    if (ptr === null || ptr.next === null) return head
    const first = ptr
    const second = ptr.next
    
    first.next = swapPairs(second.next)
    second.next = first
    
    return second
  }

  return recurse(head)
}
// @lc code=end

