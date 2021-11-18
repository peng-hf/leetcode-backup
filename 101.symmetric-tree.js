/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// Space O(h)
// Time O(n)
var isSymmetric = function(root) {
  if (root === null) return true

  function recurse(left, right) {
    if (left === null || right === null) return left === right
    else if (left.val !== right.val) return false
    else {
      return recurse(left.left, right.right) && recurse(left.right, right.left)
    }
  }
  return recurse(root.left, root.right)
};
// @lc code=end

