/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate1 = function(matrix) { // Space O(n * n), Time O(n ^2)
  var curArrayIdx = matrix.length - 1, curIdxInArray = 0
  var res = []

  for (var i = 0; i < matrix.length; ++i) {
    res.push([0, 0, 0])
  }

  for (let i = 0; i < matrix[0].length; ++i) {
    curIdxInArray = 0
    for (let j = 0; j < matrix.length; j++) {
      res[j][i] = matrix[curArrayIdx][curIdxInArray]
      curIdxInArray++
    }
    curArrayIdx--
  }

  return res
};


var rotate = function(matrix) {
  // Transpose, turn the rows into columns and columns into row
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = i + 1; j < matrix.length; ++j) {
      const tmp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = tmp
    }
  }

  // Reverse each row
  for (let k = 0; k < matrix.length; ++k) {
    var i = 0, j = matrix[k].length - 1
    while (i < j) {
      const tmp = matrix[k][i]
      matrix[k][i] = matrix[k][j]
      matrix[k][j] = tmp
      i++
      j--
    }
  }
}


// @lc code=end

