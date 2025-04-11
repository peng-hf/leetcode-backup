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
function maxDiffHelper(root, ancestorVal) {
  let maxDiff = -1;
  function dfs(node) {
    if (node === null) return;
    maxDiff = Math.max(maxDiff, Math.abs(node.val - ancestorVal));
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return maxDiff;
}

// Bruteforce
// Time: O(n * (n-1)) = O(n^2)
// Space: O(log(n) ^ 2)
function maxAncestorDiff1(root) {
  let maxDiff = 0;
  function dfs(node) {
    if (node === null) return;
    const res = maxDiffHelper(node, node.val);
    maxDiff = Math.max(maxDiff, res);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return maxDiff;
}

// Optimal solution
function maxAncestorDiff(root) {
    let ans = 0 

    function dfs(node, min, max) {
        if (node === null) return
        
        const curDiff = Math.max(Math.abs(node.val - max), Math.abs(node.val - min))
        ans = Math.max(ans, curDiff)

        min = Math.min(node.val, min)
        max = Math.max(node.val, max)

        dfs(node.left, min, max)
        dfs(node.right, min, max)
    }
    dfs(root, root.val, root.val)

    return ans
}
