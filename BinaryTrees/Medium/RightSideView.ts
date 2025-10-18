// 199. Binary Tree Right Side View

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

function rightSideView(root: TreeNode | null): number[] {
  let result = [];
  let queue = [root]; // so we can use it in the while loop

  while (queue.length > 0) {
    let rightSide: TreeNode = null;

    for (let i = 0; i < queue.length; i++) {
      // every node in current level
      let node = queue.shift(); // pop the node from front of queue
      // we use the front node, because when we set rightSide, = no
      if (node) {
        // take all children of the level and add to the queue
        rightSide = node; // rightmost variable
        queue.push(node.left); // add before right node
        queue.push(node.right);
      }
    }

    if (rightSide) {
      result.push(rightSide.val);
    }
  }

  return result;
}

console.log(
  rightSideView(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
); // 3, 20, 7
