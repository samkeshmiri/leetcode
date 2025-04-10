# 11. Container With Most Water

from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        leftPointer = 0
        rightPointer = len(height) - 1
        maxContainer = 0

        while (leftPointer < rightPointer):
            smallerSide = min(height[leftPointer], height[rightPointer])
            maxContainer = max(maxContainer, smallerSide *
                               (rightPointer - leftPointer))

            if (height[rightPointer] > height[leftPointer]):
                leftPointer += 1
            else:
                rightPointer -= 1

        return maxContainer
