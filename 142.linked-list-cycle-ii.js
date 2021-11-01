/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Space O(n) where n is the number of nodes 
// Time O(n) where n is the number of nodes
var detectCycle1 = function(head) {
  var seen = new Set()
  while (head !== null) {
    if (seen.has(head)) return head
    seen.add(head)
    head = head.next
  }
  return null
};


function intersection(head) {
  var slow = head, fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return slow
  }
  return null
}

// Space complexity O(1)
// Time complexity O(n) +
var detectCycle = function(head) {
  // Floyd's cycle detection algorithm
  // (1) get intersection node between slow and fast pointer, if null = no cycle
  // (2) intersection and start node will be at the same distance from the cycle
  //     advance them by 1 until they meet = cycle start 
  var inter = intersection(head)
  if (inter === null) return null

  var start = head
  while (start !== inter) {
    start = start.next
    inter = inter.next
  }
  return start
}
// @lc code=end

