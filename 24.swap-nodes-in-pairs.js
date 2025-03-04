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

// Iterative
 var swapPairs = function(head) {
   if (head === null || head.next === null) return head
   var prev = head, cur = head.next, last = null
   while (true) {
     const next = cur.next
     cur.next = prev
     prev.next = next
     if (last !== null) last.next = prev
     

     if (prev === head) head = cur
     if (next !== null && next.next !== null) {
        last = cur
        prev = next
        cur = prev.next
     } else break
   }
   return head
 }



// @lc code=end

