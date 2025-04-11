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
function rightSideView(root) {
  const ans = [];

  if (root === null) return ans;

  let queue = [root];
  while (queue.length) {
    let nextQueue = [];
    for (let i = 0; i < queue.length; ++i) {
      const node = queue[i];
      if (i === queue.length - 1) {
        ans.push(node.val);
      }

      // Push children to the next queue
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }

    queue = nextQueue;
  }

  return ans;
}
