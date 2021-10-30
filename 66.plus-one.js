/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var i = digits.length - 1
  while (i >= 0) {
    if (digits[i] < 9) {
      digits[i]++
      break
    } else {
      digits[i] = 0
      if (i === 0) digits.unshift(1)
    }
    i--
  }
  return digits
};
// @lc code=end

