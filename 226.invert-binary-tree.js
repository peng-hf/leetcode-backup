/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
// Space O(n)
// Time O(n)
var invertTree = function(root) {
  function recurse(root) {
    if (root === null) return
    const tmp = root.left
    root.left = root.right
    root.right = tmp
    recurse(root.left)
    recurse(root.right)
  }
  
  recurse(root)
  return root  
};


// Iterative Time O(n)
//  Space O(n/2) = O(n) => worst case if tree is balanced where most nodes store at once when all the leaves at in the stack
var invertTree = function(root) {
  if (root === null) return root
  var stack = [root] // LIFO
  while (stack.length !== 0) {
    var cur = stack.pop()
    
    if (cur.left !== null) stack.push(cur.left)
    if (cur.right !== null) stack.push(cur.right);
    
    const tmp = cur.left
    cur.left = cur.right
    cur.right = tmp
  }
  return root
}


// @lc code=end

