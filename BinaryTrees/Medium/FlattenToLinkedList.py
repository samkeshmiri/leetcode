# 114. Flatten Binary Tree to Linked List

from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        # acts as pointer. can't start with null because we need to access left/right
        prev = TreeNode(-1)

        def convert(node: TreeNode) -> None:
            nonlocal prev
            if node is None:
                return

            left = node.left
            right = node.right

            prev.right = node
            prev = node
            node.left = None
            convert(left)
            convert(right)

        convert(root)


if __name__ == "__main__":
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.left.left = TreeNode(3)
    root.left.right = TreeNode(4)
    root.right = TreeNode(5)
    root.right.right = TreeNode(6)

Solution().flatten(root)
