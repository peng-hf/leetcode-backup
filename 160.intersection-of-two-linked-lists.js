/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


// Space O(n + m) where n is the nb of node listA and m nb of nodes in list b
// Time O(n) where n is the number of nodes in the list
function getIntersectionNode1(headA, headB) {
  const seenInA = new Set()
  while (headA !== null) {
    seenInA.add(headA)
    headA = headA.next
  }

  while (headB !== null) {
    if (seenInA.has(headB)) return headB
    headB = headB.next
  }
  return null
};

// Brute forte with O(1) space
// Time O(n * m) where n is nb nodes in listA and m nb nodes in listB
function getIntersectionNode2(headA, headB) {
  var ptrA = headA, ptrB = headB

  while (ptrA !== null) {
    ptrB = headB
    while (ptrB !== null) {
      if (ptrA === ptrB) return ptrA
      ptrB = ptrB.next
    }
    ptrA = ptrA.next
  }
  return null
}


// Space O(1)
// Time O(n + m)
function getIntersectionNode3(headA, headB) {
  var ptrA = headA, ptrB = headB, aCount = 0, bCount = 0

  while (ptrA !== null) { // Calculate A length
    aCount++
    ptrA = ptrA.next
  }

  while (ptrB !== null) { // Calculate B length
    bCount++
    ptrB = ptrB.next
  }

  // Set the ptr with the longest list at the start of the shortest list
  ptrA = headA, ptrB = headB
  var steps = Math.abs(aCount - bCount)
  if (aCount > bCount) {
    while (steps-- !== 0) ptrA = ptrA.next
  } else {
    while (steps-- !== 0) ptrB = ptrB.next
  }

  // Step the two pointers through the list until there's an intersection
  while (ptrA !== null && ptrB !== null) {
    if (ptrA === ptrB) return ptrA
    ptrA = ptrA.next
    ptrB = ptrB.next
  }
  return null
}

// Space O(1)
// Time O(2n + 2m), worse case each list is traversed twice if the intersection 
// is the last node
function getIntersectionNode(headA, headB) {
  var ptrA = headA, ptrB = headB
  while (ptrA !== ptrB) {
    ptrA = ptrA === null ? headB : ptrA.next
    ptrB = ptrB === null ? headA : ptrB.next
  }
  return ptrA
}

// @lc code=end

