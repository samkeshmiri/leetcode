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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  return helper(root, targetSum, 0);
}

function helper(
  root: TreeNode | null,
  targetSum: number,
  currentSum: number
): boolean {
  if (!root) return false;
  if (!root.left && !root.right) return targetSum === currentSum + root.val;

  return (
    helper(root.left, targetSum, currentSum + root.val) ||
    helper(root.right, targetSum, currentSum + root.val)
  );
}

const root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);

const root2 = new TreeNode(1, new TreeNode(2));

// console.log(hasPathSum(root, 22));
console.log(hasPathSum(root2, 1));
