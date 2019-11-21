/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let answer = [];
  if (!root) return answer;
  // nodes and their depth
  let queue = [{ node: root, depth: 0 }];
  while (queue.length) {
    let { node, depth } = queue.shift();
    if (node.left) queue.push({ node: node.left, depth: depth + 1 });
    if (node.right) queue.push({ node: node.right, depth: depth + 1 });
    if (!answer[depth]) answer.push([node.val]);
    else answer[depth].push(node.val)
  }
  return answer;
};