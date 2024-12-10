// 102. Binary Tree Level Order Traversal

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  const queue: TreeNode[][] = [];
  queue.push([root]);

  const result: number[][] = [];
  while (queue[0].length) {
    const currentNodes = queue.pop();
    result.push(currentNodes.map((i) => i.val));

    const nextQueue = [];
    for (const node of currentNodes) {
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    queue.push(nextQueue);
  }

  return result;
}

console.log(
  levelOrder(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);
