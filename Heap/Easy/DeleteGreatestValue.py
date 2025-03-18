# 2500. Delete Greatest Value in Each Row

import heapq
from typing import List


class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:
        if len(grid) == 1:
            return sum(grid[0])  # row could have more than 1 elem

        total = 0

        heaps = []
        for row in grid:
            heap = [-x for x in row]
            heapq.heapify(heap)
            heaps.append(heap)

        while any(heaps):  # while any array has an elem
            max_vals = []
            # for every heap we've created, we will add the largest value from it and add it to our max_vals array
            for heap in heaps:
                if heap:
                    max_vals.append(-heapq.heappop(heap))

            # once we've added the largest value from every heap
            # we will get the largest number and add it to our total
            if max_vals:
                # resets on next iteration
                total += max(max_vals)

        return total


if __name__ == "__main__":
    solution = Solution()
    # print(solution.deleteGreatestValue([[1, 2, 4], [3, 3, 1]])) # 8
    print(solution.deleteGreatestValue(
        [[58, 42, 8, 75, 28], [35, 21, 13, 21, 72]]))  # 216
