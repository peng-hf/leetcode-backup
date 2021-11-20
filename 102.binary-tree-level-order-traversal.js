/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
// recursive
// Space O(n)
// Time O(n)
var levelOrder = function(root) {
  var levels = []
  function traverse(root, idx) {
    if (root === null) return
    if (!levels[idx]) levels.push([])
    var level = levels[idx]
    level.push(root.val)
    traverse(root.left, idx + 1)
    traverse(root.right, idx + 1)
  }
  
  traverse(root, 0)
  return levels
};


// Iterative approach
// Space O(n) to keep the output structure
// Time O(n) since each node is processed exactly once
var levelOrder = function(root) {
  if (root == null) return []
  var queue = [], levels = []
  queue.unshift(root)
  
  while (queue.length !== 0) {
    var countPop = queue.length
    var level = []
    
    while (countPop-- > 0) {
      const node = queue.pop()
      level.push(node.val)
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    levels.push(level)    
  }
  
  return levels
}

