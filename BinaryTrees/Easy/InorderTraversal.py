# 94. Binary Tree Inorder Traversal

from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []

        def traverse(root: Optional[TreeNode]):
            nonlocal result
            if root is None:
                return

            traverse(root.left)
            result.append(root.val)
            traverse(root.right)

        traverse(root)
        return result


TreeNode1 = TreeNode(1)
TreeNode2 = TreeNode(2)
TreeNode3 = TreeNode(3)
TreeNode1.right = TreeNode2
TreeNode2.left = TreeNode3
print(Solution().inorderTraversal(TreeNode1))  # Output: [1, 3, 2]
