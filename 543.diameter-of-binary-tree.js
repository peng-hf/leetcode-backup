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


// Brute force method with time complexity O(N^N)
// and space O(H) or O(log(N))

function height(node) {
  if (node === null) return -1;
  const left = height(node.left);
  const right = height(node.right);
  return 1 + Math.max(left, right);
}

function diameterOfBinaryTree1(root) {
  let diameter = 0;
  function dfs(node) {
    if (node === null) return;

    const left = height(node.left) + 1;
    const right = height(node.right) + 1;
    diameter = Math.max(diameter, left + right);

    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return diameter;
}


// Optimal solution
// Time: O(N) and O(H)
function diameterOfBinaryTree(root) {
  let diameter = 0;
  function dfs(node) {
    if (node === null) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  }
  dfs(root);
  return diameter;
}