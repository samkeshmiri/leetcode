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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null) return null;

  if (root.val == val) return root;

  if (val > root.val) {
    return searchBST(root.right, val);
  } else {
    return searchBST(root.left, val);
  }
}

console.log(searchBST(new TreeNode(2, new TreeNode(1), new TreeNode(3)), 3));
