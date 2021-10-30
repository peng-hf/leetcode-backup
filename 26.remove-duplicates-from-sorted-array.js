/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var i = 0, j = 1
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
    }
    j++
  }
  return i + 1
};

// @lc code=end

