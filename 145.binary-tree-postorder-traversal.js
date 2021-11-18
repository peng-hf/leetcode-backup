/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
// Time O(n) where n is the number of nodes in the tree
// Space O(n)
var postorderTraversal = function(root) {
  var res = []
  function recurse(root) {
    if (!root) return
    recurse(root.left)
    recurse(root.right)
    res.push(root.val)
  }
  recurse(root)
  return res
};

// Space 
var postorderTraversal = function(root) {
  if (root === null) return []

  var res = [], stack = []
  stack.push(root)
  while (stack.length !== 0) {
    const cur = stack.pop()
    res.push(cur.val)
    if (cur.left !== null) stack.push(cur.left)
    if (cur.right !== null) stack.push(cur.right)
  }
  return res.reverse()
}
// @lc code=end

