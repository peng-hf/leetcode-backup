/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Time O(n)
// Space O(n)
var rangeSumBST = function(root, low, high) {
  var sum = 0
  function traverse(node) {
    if (node === null) return
    if (node.val >= low && node.val <= high) sum += node.val
    if (node.val > low) traverse(node.left)
    if (node.val < high) traverse(node.right)
  }

  traverse(root)
  return sum
};
// @lc code=end

