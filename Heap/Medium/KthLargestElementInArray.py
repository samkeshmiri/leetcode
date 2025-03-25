# 215. Kth Largest Element in an Array

import heapq
from typing import List


# heap solution
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)
        return heapq.nlargest(nums, k)[k]


print(Solution().findKthLargest([3, 2, 1, 5, 6, 4]))

# TODO: quick select
