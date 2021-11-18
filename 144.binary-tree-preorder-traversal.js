/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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

// n is the number of nodes in the tree
// Time O(n)
// Space (n)
 var preorderTraversal = function(root) {
  if (root === null) return []
  var res = []
  var stack = []
  
  stack.push(root)
  while (stack.length !== 0) {
    const root = stack.pop()
    res.push(root.val)
    if (root.right !== null) stack.push(root.right)
    if (root.left !== null) stack.push(root.left)
  }
  
  return res
};

var preorderTraversal = function(root) {
  var res = []
  function recurse(root) {
    if (root) {
      res.push(root.val)
      recurse(root.left, res)
      recurse(root.right, res)
    }
  }
  
  recurse(root)
  return res
}
// @lc code=end

