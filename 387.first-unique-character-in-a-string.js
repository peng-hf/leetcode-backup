/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var unique = {}
  for (let i = 0; i < s.length; ++i) {
    const c = s[i]
    unique[c] = unique.hasOwnProperty(c) ? false : i
  }

  for (let c in unique) {
    if (typeof unique[c] === 'number') return unique[c]
  }
  return -1
};

var firstUniqChar = function(s) {
  var count = {}
  for (const c of s) {
    count[c] = count.hasOwnProperty(c) ? count[c] + 1 : 1
  }

  for (let i = 0; i < s.length; ++i) {
    if (count[s[i]] === 1) return i
  }
  return -1
};
// @lc code=end

