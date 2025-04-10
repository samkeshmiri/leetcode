# 704. Binary Search

from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        leftPointer = 0
        rightPointer = len(nums)

        while (leftPointer < rightPointer):
            midPointer = (rightPointer + leftPointer) // 2
            midPointerValue = nums[midPointer]
            if (target == midPointerValue):
                return midPointer

            if (target > midPointerValue):
                leftPointer = midPointer + 1
            else:
                rightPointer = midPointer

        return -1
