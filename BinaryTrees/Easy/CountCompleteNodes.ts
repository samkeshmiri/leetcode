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

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;

  let leftLevels = 1;
  let leftNodes = root.left;
  while (leftNodes) { // traverse to left most node and count the levels
    leftNodes = leftNodes.left;
    leftLevels++;
  }

  let rightLevels = 1;
  let rightNodes = root.right;
  while (rightNodes) { // do the same towards the rightmost node
    rightNodes = rightNodes.right;
    rightLevels++;
  }

  if (leftLevels == rightLevels) { // if the levels are the same, that means we have a perfect binary tree (all nodes filled)
    return Math.pow(2, leftLevels) - 1; // we can return either left or right exponential (the height) - 1 because of the root
  }

  return 1 + countNodes(root.left) + countNodes(root.right); // otherwise we add 1 (current node) and halve the problem
}

const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)));

countNodes(root);
