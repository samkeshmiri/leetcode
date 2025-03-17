# 1464. Maximum Product of Two Elements in an Array

import heapq
from typing import List

# max heap inter
# class Solution:
#     def maxProduct(self, nums: List[int]) -> int:
#         heapq._heapify_max(nums)

#         sum = 1

#         for i in range(2):
#             sum *= heapq._heappop_max(nums) - 1

#         return sum

# using negative numbers to put largest at front of the queue


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        heap = []
        for i in [-x for x in nums]:
            heapq.heappush(heap, i)

        sum = 1

        for i in range(2):
            sum *= (-heapq.heappop(heap) - 1)

        return sum


# print(Solution().maxProduct([3, 4, 5, 2]))  # 12
print(Solution().maxProduct([1, 5, 4, 5]))  # 16
