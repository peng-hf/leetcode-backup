/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku1 = function(board) {
  var row, column, box
  // Verify row and column
  for (let i = 0; i < 9; ++i) {
    row = {}, column = {}, box = {}
    for (let j = 0; j < 9; ++j) {
      const rVal = board[i][j]
      const cVal = board[j][i]
      const bVal = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]

      if (rVal !== '.') {
        if (rVal in row) return false
        row[rVal] = true
      }

      if (cVal !== '.') {
        if (cVal in column) return false
        column[cVal] = true
      }

      if (bVal !== '.') {
        if (bVal in box) return false
        box[bVal] = true
      }

    }
  }
  return true
};


var isValidSudoku = function(board) {
  var seen = {}
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      const val = board[i][j]
      if (val == '.') continue
      const rKey = `${val} in row ${i}`
      const cKey = `${val} in column ${j}`
      const bKey = `${val} in box ${Math.floor(i/3)} - ${Math.floor(j/3)}`

      if (rKey in seen || cKey in seen || bKey in seen) return false

      seen[rKey] = true
      seen[cKey] = true
      seen[bKey] = true
    }
  }
  console.log(seen)
  return true
}
// @lc code=end

