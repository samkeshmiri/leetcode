function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return isMirror(root.left, root.right);
}

function isMirror(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isMirror(p.left, q.right) && isMirror(p.right, q.left);
}

// Time complexity: O(n)
// Space complexity: O(n)
console.log(
  isSymmetric(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    )
  )
); // true
