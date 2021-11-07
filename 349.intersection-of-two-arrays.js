/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Time O(n + m)
// Space O(min(n, m))
var intersection1 = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersection(nums2, nums1)
  }
  const res = new Set()
  const seen = new Set()
  
  for (const n of nums1) seen.add(n)
  for (const n of nums2) {
    if (seen.has(n)) res.add(n)
  }

  return [...res]
};

// Assume nums1, nums2 sorted, implement in O(n) time and O(1) memory
var intersection = function(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a , b) => a - b)

  var inter = [], i = 0, j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      j++
    } else if (nums1[i] < nums2[j]) {
      i++
    } else {
      const interVal = nums1[i]
      inter.push(interVal)
      while (i < nums1.length && nums1[i] === interVal) i++
      while (j < nums2.length && nums2[j] === interVal) j++
    }
  }
  return inter
}
// @lc code=end

