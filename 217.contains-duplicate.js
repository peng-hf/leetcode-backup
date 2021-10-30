/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) { // Space O(n), Time O(n)
  const mapCount = {}
  for (const n of nums) {
    if (n in mapCount && mapCount[n] === 1) return true
    mapCount[n] = n in mapCount ? mapCount[n] + 1 : 1
  }
  return false
};
// @lc code=end

