/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber2 = function(nums) { // Time O(n^2), Space O(1)
  if (nums.length === 1) return nums[0]
  var dup = false
  for (let i = 0; i < nums.length; ++i) {
    dup = false
    for (let j = 0; j < nums.length; ++j) {
      if (nums[i] === nums[j] && i !== j) {
        dup = true
        break
      }
    }
    if (!dup) return nums[i]
  }
  return false // not possible
};

var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0]
  var res = 0
  for (n of nums) {
    res = res ^ n
  }
  return res
}
// @lc code=end

