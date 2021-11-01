/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */

/*
Space O(n) 
Time O(n) 
=> Where n is the number of note in the linked list
*/
var hasCycle1 = function(head) {
  const seen = new Set()
  while (head !== null) {
    if (seen.has(head)) return true
    seen.add(head)

    head = head.next
  }
  return false
};

 // Space O(1)
 // Time O(n + m) where n is the number of notes and m number of notes in cycles
 // since n >= m, when m = n then O(n + n) = O(2n) = O(n)
var hasCycle = function(head) {
  var slow = head, fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}
// @lc code=end

