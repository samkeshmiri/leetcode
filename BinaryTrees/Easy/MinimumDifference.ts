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

function minDiffInBST(root: TreeNode | null): number {
  function helper(
    root: TreeNode | null,
    previousVal: number,
    currentDiff: number
  ): { prev: number; diff: number } {
    if (!root) return { prev: previousVal, diff: currentDiff };
    if (currentDiff === 1) return { prev: previousVal, diff: currentDiff };

    // Traverse the left subtree
    let left = helper(root.left, previousVal, currentDiff);

    currentDiff = Math.min(left.diff, Math.abs(root.val - left.prev));
    previousVal = root.val;

    // Traverse the right subtree
    let right = helper(root.right, previousVal, currentDiff);

    // Return the updated previousVal and currentDiff
    return { prev: right.prev, diff: right.diff };
  }

  return helper(root, -Infinity, Infinity).diff;
}

console.log(minDiffInBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))));

function minDiffInBSTUsingGlobalVars(root: TreeNode | null): number {
  // local globals
  let previousVal = Infinity; // needs to be Infinity or you need to handle null when doing the math comparison
  let currentDiff = Infinity;
  function helper(root: TreeNode | null) {
    if (!root) return; // don't need to return currentDiff cause it's global
    if (currentDiff === 1) return; // return early if lowest possible diff (1)

    helper(root.left);

    currentDiff = Math.min(currentDiff, Math.abs(root.val - previousVal));
    previousVal = root.val;

    helper(root.right);

    return currentDiff;
  }

  return helper(root);
}

console.log(
  minDiffInBSTUsingGlobalVars(new TreeNode(2, new TreeNode(1), new TreeNode(3)))
);
