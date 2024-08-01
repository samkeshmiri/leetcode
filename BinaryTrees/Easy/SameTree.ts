function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, new TreeNode(9), new TreeNode(3))
  )
);

// Time complexity: O(n)
// Space complexity: O(n)

// function traverse(node: TreeNode) {
//   if (!node) {
//     return;
//   }
//   traverse(node.left!);

//   traverse(node.right!);
//   console.log(node.val);
// }
