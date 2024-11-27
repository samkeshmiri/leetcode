// 108. Convert Sorted Array to Binary Search Tree

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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function insert(leftIndex: number, rightIndex: number): TreeNode | null {
    if (leftIndex > rightIndex) return null;

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let root = new TreeNode(nums[middleIndex]);
    root.left = insert(leftIndex, middleIndex - 1);
    root.right = insert(middleIndex + 1, rightIndex);

    return root;
  }

  return insert(0, nums.length - 1);
}

console.log(sortedArrayToBST([0, 1, 2, 3, 4, 5]));
