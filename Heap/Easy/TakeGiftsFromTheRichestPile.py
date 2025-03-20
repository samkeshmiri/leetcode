# 2558. Take Gifts From the Richest Pile

import math
from typing import List
import heapq


class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        heap = [-x for x in gifts]
        heapq.heapify(heap)

        for _ in range(k):
            gifts = heapq.heappop(heap)
            sq = math.floor(math.sqrt(abs(gifts)))
            heapq.heappush(heap, -sq)

        return -sum(heap)

# cleaner version


class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        max_heap = [-gift for gift in gifts]
        heapq.heapify(max_heap)

        for _ in range(k):
            largest_gift = -heapq.heappop(max_heap)
            reduced_gift = math.isqrt(largest_gift)
            heapq.heappush(max_heap, -reduced_gift)

        return -sum(max_heap)


print(Solution().pickGifts([25, 64, 9, 4, 100], 4))
