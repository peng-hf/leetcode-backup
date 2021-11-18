/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
// n number of nodes in the tree
// Space O(n)
// Time O(n)
var inorderTraversal = function(root) {
  var res = []

  function recurse(root) {
    if (root) {
      recurse(root.left)
      res.push(root.val)
      recurse(root.right)
    }
  }
  recurse(root)
  return res
};  

// Space O(n) where n is the n is the size of tre
// Time O(n) as we are vising every node in the tree
var inorderTraversal = function(root) {
  var res = [], stack = [], cur = root
  while (cur !== null || stack.length !== 0) {
    if (cur !== null) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      res.push(cur.val)
      cur = cur.right
    }
  }
  return res
}
// @lc code=end

