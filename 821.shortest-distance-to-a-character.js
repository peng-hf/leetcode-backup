/*
 * @lc app=leetcode id=821 lang=javascript
 *
 * [821] Shortest Distance to a Character
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
// With extra memory
function shortestToChar(s, c) {
  let results = []
  let indexOfC = []

  for (let i = 0; i < s.length; ++i) {
      if (s[i] === c) indexOfC.push(i)
  }

  for (let i = 0; i < s.length; ++i) {
      results[i] = Math.abs(indexOfC[0] - i)
      for (let j = 1; j < indexOfC.length; ++j) {
          const dist = Math.abs(indexOfC[j] - i)
          if (dist < results[i]) results[i] = dist
      }
  }
}

// In-place
function shortestToChar2(s, c) {
  let results = []

  let next = s.indexOf(c) // find first occurence
  let prev = next
  for (let i = 0; i < s.length; ++i) {
      if (i > next) {
          prev = next
          if (s.indexOf(c, i) !== -1) {
              next = s.indexOf(c, i)
          }
      }
      results[i] = Math.min(
          Math.abs(prev - i),
          Math.abs(next - i)
      )
  }

  return results
};
// @lc code=end

