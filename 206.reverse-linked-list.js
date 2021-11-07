/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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

// Space O(n) where n is the list length
// Time O(n)
var reverseList1 = function(head) {
  if (head === null) return head
  var saved = [], ptr = head
  while (ptr !== null) {
    saved.push(ptr)
    ptr = ptr.next
  }
  for (let i = saved.length - 1; i > 0; --i) {
    const node = saved[i], predNode = saved[i - 1]
    node.next = predNode
  }
  head.next = null
  return saved[saved.length - 1]
};

// Time O(n) where n is the length of list
// Space O(1)
var reverseList = function(head) {
  var cur = head, prev = null
  while (cur !== null) {
    var tmpNext = cur.next
    cur.next = prev
    prev = cur
    cur = tmpNext
  }
  return prev
}


// @lc code=end

