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

function maxDepth(root: TreeNode | null): number {
  function dfs(root: TreeNode | null, count: number): number {
    if (!root) return count;

    count++;

    return Math.max(dfs(root.left, count), dfs(root.right, count));
  }

  return dfs(root, 0);
}

console.log(maxDepth(new TreeNode(2, new TreeNode(1), new TreeNode(3))));
