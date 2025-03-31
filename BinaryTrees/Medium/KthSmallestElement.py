# 230. Kth Smallest Element in a BST
# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        count = 0

        def inOrderTraversal(node: TreeNode) -> TreeNode:
            nonlocal count
            if node is None:
                return

            leftResult = inOrderTraversal(node.left)
            # short circuit return if answer in left subtree
            if leftResult:
                return leftResult
            count += 1

            if k == count:
                return node
            return inOrderTraversal(node.right)

        return inOrderTraversal(root).val


if __name__ == '__main__':
    root = TreeNode(3)
    root.left = TreeNode(1)
    root.right = TreeNode(4)
    root.left.right = TreeNode(2)

    print(Solution().kthSmallest(root, 3))
