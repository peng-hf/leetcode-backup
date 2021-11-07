/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
// Time O(n/2) = O(n)
// Space O(n) where n is the length of the list
function isPalindrome(head) {
  if (head === null) return true

  var ptr = head, arr = []
  while (ptr !== null) {
    arr.push(ptr.val)
    ptr = ptr.next
  }

  var i = 0, j = arr.length - 1
  while (i < j) {
    if (arr[i] !== arr[j]) return false
    i++
    j--
  }
  return true
};


// recursive TODO
function isPalindrome(head) {}



// Space O(1)
// Time

function getLastNodeFirstHalf(head) {
  var slow = head, fast = head
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  // If there's an odd number of nodes, the middle node should belongs to the first half
  // 1 -> 2 -> 3 -> 2 -> 1 -> null (2 is the last node of first half)
  // 1 -> 2 -> 3 -> 3 -> 2 -> 1 -> null (first 3 is last node of first half)
  return slow
}

function reverse(head) {
  var cur = head, prev = null, next = null
  while (cur !== null) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

function isPalindrome(head) {
  if (head === null || head.next === null) return true
  
  // Find last node of the first half and reversed second half
  const lastNodeFirst = getLastNodeFirstHalf(head)
  const firstNodeSecondReversed = reverse(lastNodeFirst.next)

  // Step through first and second pointer until B ends
  //   If different then, it's not a palindrome, saved result to False
  //   If not, continue
  var result = true, first = head, second = firstNodeSecondReversed
  while (second !== null) {
    if (first.val !== second.val) {
      result = false
      break
    } 
    first = first.next
    second = second.next
  }

  // Set last node first half pointer next to re-reversed second half
  lastNodeFirst.next = reverse(firstNodeSecondReversed)
  return result
}
// @lc code=end

