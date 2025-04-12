# 104. Maximum Depth of Binary Tree

from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def dfs(root: Optional[TreeNode], count) -> int:
            if not root:
                return count

            count += 1

            return max(dfs(root.left, count), dfs(root.right, count))

        return dfs(root, 0)
