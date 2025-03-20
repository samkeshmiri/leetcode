# 2974. Minimum Number Game

import heapq
from typing import List


class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        result = []
        heapq.heapify(nums)

        while (nums):
            alice = heapq.heappop(nums)
            bob = heapq.heappop(nums)
            result.append(bob)
            result.append(alice)

        return result


print(Solution().numberGame([5, 4, 2, 3]))
