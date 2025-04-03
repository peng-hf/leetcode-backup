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
function maxDepth(root) {
  if (root === null) return 0;
  const left = maxDepth(root.left) + 1;
  const right = maxDepth(root.right) + 1;
  return Math.max(left, right);
}

// Time: O(nˆ2)
// Space: O(h)
function isBalanced1(root) {
  if (root === null) return true;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}

// Time: O(n)
// Space: O(h)
function isBalanced(root) {
  function dfs(node) {
    if (node === null) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    return 1 + Math.max(left, right);
  }

  return dfs(root) !== -1;
}
