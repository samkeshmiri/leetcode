# 373. Find K Pairs with Smallest Sums

import heapq
from typing import List


class Solution:
    def kSmallestPairs(self, nums1, nums2, k):
        if not nums1 or not nums2 or not k:
            return []

        min_heap = []
        res = []

        # only need the first k elements from nums1 to start (since arrays are sorted)
        for i in range(min(k, len(nums1))):
            # (sum, idx1, idx2)
            # total ensures the heap orders by smallest pair sum. We store indexes so we can find the next possible pair (i, j+1)
            heapq.heappush(min_heap, (nums1[i] + nums2[0], i, 0))

        while min_heap and len(res) < k:
            # total not needed for pop, only for sorting
            _total, i, j = heapq.heappop(min_heap)
            res.append([nums1[i], nums2[j]])  # always adding the smallest pair
            # We’ve just used (i, j), so we now push the next pair (i, j+1) — keeping nums1[i] fixed and moving forward in nums2
            if j + 1 < len(nums2):
                heapq.heappush(min_heap, (nums1[i] + nums2[j + 1], i, j + 1))

        return res


Solution().kSmallestPairs([1, 7, 11], [2, 4, 6], 3)
