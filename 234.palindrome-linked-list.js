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
function isPalindrome1(head) {
  if (head === null || head.next === null) return true

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
function isPalindrome2(head) {
  // var start = head
  // function recursive(ptr) {
  //   if (ptr !== null) {
  //     recursive(ptr.next)
  //     if (ptr.val !== start.val) return false
  //     else if (start === ptr) return true
  //     else {
  //       start = start.next
  //     }
  //   }
  //   return true
  // }
  // return recursive(head)
}



// Space O(1)
// Time
function isPalindrome(head) {
  if (head === null || head.next === null) return true


  
  // Find first pointer of the second half list, save the pointer (B)
  // Reverse second half 
  // Set a pointer A to head
  // Step through pointer A head and pointer B until B ends and compare
  //   If different then, it's not a palindrome, return false
  //   If not, continue
  // When loop finishes it's palindrome, saved the result true
  // Restore second half list by re-reversing it
  // Return saved result
}
// @lc code=end

