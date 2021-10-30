/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  var mapCount = {}
  for (const c of s) {
    mapCount[c] = mapCount.hasOwnProperty(c) ? mapCount[c] + 1 : 1
  }

  for (const c of t) {
    if (!mapCount.hasOwnProperty(c) || mapCount[c] === 0) return false
    mapCount[c]--
  }

  return true
};
// @lc code=end


