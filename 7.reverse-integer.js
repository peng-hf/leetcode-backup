/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} xz
 * @return {number}
 */

const MAX_INTEGER = Math.pow(2, 31) - 1
const MIN_INTEGER = -Math.pow(2, 31) 

var reverseEasy = function(x) {
  const neg = x < 0
  if (neg) x = -x

  var result = ''
  var str = x.toString()
  for (let i = str.length - 1; i >= 0; --i) {
    result += str[i]
  }
  result = neg ? parseInt(`-${result}`) : parseInt(result)
  return result <  MIN_INTEGER || result > MAX_INTEGER ? 0 : result
};


var reverse = function(x) {
  const isNeg = x < 0
  if (isNeg) x = -x
  var result = 0
  while (x !== 0) {
    const pop = x % 10
    result = (result * 10) + pop
    x = Math.trunc(x / 10)
  }
  result = isNeg ? -result : result
  return result > MAX_INTEGER || result < MIN_INTEGER ? 0 : result
}
// @lc code=end

