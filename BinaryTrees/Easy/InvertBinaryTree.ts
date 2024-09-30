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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // once the children off the root have been swapped, we do the same for the child nodes of the root (all the way down)
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

console.log(invertTree(new TreeNode(2, new TreeNode(1), new TreeNode(3))));
