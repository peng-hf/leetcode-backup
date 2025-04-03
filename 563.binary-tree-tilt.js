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
function findTilt(root) {
  let tilt = 0;
  function dfs(node) {
    if (node === null) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    tilt += Math.abs(left - right);
    return left + right + node.val;
  }
  dfs(root);
  return tilt;
}
