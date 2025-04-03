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

// My not optimal solution
// TIme: O(n), Space: O(h)
function minDepth(root) {
  if (root === null) return 0;

  let min = +Infinity;
  function dfs(node, depth) {
    if (node === null) return;
    if (!node.left && !node.right) {
      min = Math.min(depth, min);
      return;
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 1);
  return min;
}

// Time: O(n)
// Space: O(n)
function minDepthRecursive(root) {
  function dfs(node) {
    if (node === null) return 0;
    if (!node.left) return 1 + dfs(node.right);
    if (!node.right) return 1 + dfs(node.left);
    return 1 + Math.min(dfs(node.left), dfs(node.right));
  }
  return dfs(root);
}

// Time: O(n)
// Space: O(n)
function minDepth(root) {
  if (!root) return 0;

  let currMin = +Infinity;
  let stack = [[root, 1]];
  while (stack.length) {
    const [node, depth] = stack.pop();
    if (!node.left && !node.right) {
      currMin = Math.min(currMin, depth);
    }
    if (node.right) stack.push([node.right, depth + 1]);
    if (node.left) stack.push([node.left, depth + 1]);
  }
  return currMin;
}
