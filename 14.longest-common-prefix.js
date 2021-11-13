/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return strs
  var prefix = ''

  var i = 0, j = 1
  while (i < strs[0].length) {
    j = 1
    while (j < strs.length) {
      if (i === strs[j].length || strs[0][i] !== strs[j][i]) {
        return prefix
      }
      j++
    }
    prefix += strs[0][i]
    i++
  }
  return prefix
};
// @lc code=end

