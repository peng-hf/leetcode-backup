/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) { // Space O(1), Time O(n^2)
  var i = 0;
  var say = '1'
  while (i < n - 1) {
    var j = 0, k = 0, count = 0, tmp = ''
    while (j < say.length) {
      if (say[k] === say[j]) {
        count++
        j++
      }
      else {
        tmp += count + say[k]
        k = j
        count = 0
      }
    }
    tmp += count + say[k]
    say = tmp
    i++
  }
  return say
};


var countAndSay = function(n) {
  function recurse(n, say) {
    if (n === 1) return say
    
    var i = 0, j = 0, count = 0, tmp = ''
    while (j < say.length) {
      if (say[j] === say[i]) {
        count++
        j++
      } else {
        tmp += count + say[i]
        i = j
        count = 0
      }
    }
    tmp += count + say[i]
    return recurse(n - 1, tmp)
  }
  
  return recurse(n, '1')
}
// @lc code=end

