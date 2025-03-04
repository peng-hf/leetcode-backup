/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  let lifo = [];
  const mapCloseToOpenBracket = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const currentBracket of s) {
    // Verify if the bracket is an opening one and prepend it to the array (stack)
    if (
      currentBracket === "(" ||
      currentBracket === "[" ||
      currentBracket === "{"
    ) {
      lifo.unshift(currentBracket);
    }

    // It's a closing bracket, extract and remove the first element
    else {
      const openBracket = lifo.shift();
      if (mapCloseToOpenBracket[currentBracket] !== openBracket) {
        return false;
      }
    }
  }
  return lifo.length === 0;
};
// @lc code=end

