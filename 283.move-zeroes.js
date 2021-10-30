/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function(nums) { // Space: O(1), Time: Best O(n), Wost O(n^2)?
  var tmp, j
  for (var i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === 0) {
      j = i
      while (j + 1 < nums.length && nums[j + 1] !== 0) {
        tmp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = tmp
        j++
      }
    }
  }
};

var moveZeroes = function(nums) { // Space O(n), Time(1)
  var lastNonZeroFound = 0
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFound] = nums[i]
      lastNonZeroFound++
    }
  }

  for (let j = lastNonZeroFound; j < nums.length; ++j) {
    nums[j] = 0
  }
}

var moveZeroes2 = function(nums) { // Space O(n), Time O(n)
  var helper = []
  var countZero = 0

  for (let n of nums) {
    if (n === 0) countZero++
  }
  for (let n of nums) {
    if (n !== 0) helper.push(n)
  }
  for (let i = 0; i < countZero; ++i) {
    helper.push(0)
  }
  for (let i = 0; i < nums.length; ++i) {
    nums[i] = helper[i]
  }
}
// @lc code=end

