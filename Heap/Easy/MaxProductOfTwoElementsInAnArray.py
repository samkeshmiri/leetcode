# 1464. Maximum Product of Two Elements in an Array

import heapq
from typing import List


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        heapq._heapify_max(nums)

        sum = 1

        for i in range(2):
            sum *= heapq._heappop_max(nums) - 1

        return sum


print(Solution().maxProduct([3, 4, 5, 2]))  # 12
