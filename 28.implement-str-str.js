/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0

  var i = 0, j = 0
  while (i <= haystack.length - needle.length) {
    while (j < needle.length) {
      if (haystack[i + j] !== needle[j]) {
        j = 0
        break
      }
      j++
    }
    if (j === needle.length) return i

    i++
  }

  return -1
};
// @lc code=end

