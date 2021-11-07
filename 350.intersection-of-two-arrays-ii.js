/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) { // Time: O(n + m), Space O(n)
  var mapCount = {} 
  var res = []
  for (n of nums1) {
    mapCount[n] = n in mapCount ? mapCount[n] + 1 : 1
  } 
  for (n of nums2) {
    if (n in mapCount && mapCount[n] !== 0) {
      res.push(n)
      mapCount[n]--
    }
  }

  return res
};

// If nums1 and nums2 are sorted
var intersect2 = function(nums1, nums2) {
  var i = 0, j = 0
  var res = []
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) res.push(nums1[i])
    if (nums1[i] > nums2[j]) j++
    else i++
  }
  return res
}

// If use quicksort
// Space O(logn + logm)
// Time O(nlogn + mlogm)
function intersect(nums1, nums2) {
  var res = []
  nums1.sort()
  nums2.sort()
  
  var i = 0, j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) j++
    else if (nums2[j] > nums1[i]) i++
    else {
      res.push(nums1[i])
      i++
      j++
    }
  }
  
  return res
}

// @lc code=end

