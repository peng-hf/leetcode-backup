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
// Time: O(n) => each node is visited
// Space: O(n/2) = O(n) => Last Level gas n/2 nodes
function largestValues(root) {
  let ans = [];
  if (root == null) return ans;

  let queue = [root];
  while (queue.length) {
    const countNodesCurLvl = queue.length;
    let maxCurRow = -Infinity;
    for (let i = 0; i < countNodesCurLvl; ++i) {
      const node = queue.shift();
      maxCurRow = Math.max(maxCurRow, node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(maxCurRow);
  }
  return ans;
}
