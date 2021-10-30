/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isAlphanumeric(str) {
  return !!str && str.match(/[A-Za-z0-9]/g) !== null
}

var isPalindrome1 = function(s) { // Space O(n), Time O(n)
  var cleaned = ''
  for (const c of s) {
    if (isAlphanumeric(c)) cleaned += c.toLowerCase()
  }

  var i = 0, j = cleaned.length - 1
  while (i < j) {
    if (cleaned[i] !== cleaned[j]) return false
    i++
    j--
  }
  return true
};

var isPalindrome2 = function(s) { // Time O(n), Space O(1)
  var i = 0, j = s.length - 1
  while (i < j) {
    while (!isAlphanumeric(s[i]) && i < j) i++
    while (!isAlphanumeric(s[j]) && j > i) j--
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false
    i++
    j--
  }
  return true
}

var isPalindrome = function(s) { // Time O(n), Space O(1)
  var i = 0, j = s.length - 1
  while (i < j) {
    if (!isAlphanumeric(s[i])) i++
    else if (!isAlphanumeric(s[j])) j--
    else if (s[i].toLowerCase() !== s[j].toLowerCase()) return false
    else {
      i++
      j--
    }
  }
  return true
}
// @lc code=end

