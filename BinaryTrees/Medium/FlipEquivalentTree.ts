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

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 || !root2) return root1 === root2; // is one of them null? yes? are they both null?
  if (root1.val !== root2.val) return false; // check root values are the same

  return (
    // check both flipped and unflipped conditions
    (flipEquiv(root1.left, root2.left) &&
      flipEquiv(root1.right, root2.right)) ||
    (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
  );
}

flipEquiv(new TreeNode(1), new TreeNode(1));
