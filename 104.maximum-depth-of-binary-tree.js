/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
// Space O(n)
// Time O(n)
var maxDepth = function(root) {
  if (root === null) return 0
  const leftMax = maxDepth(root.left)
  const rightMax = maxDepth(root.right)
  return Math.max(leftMax, rightMax) + 1
};
// @lc code=end

