# 162. Find peak element

from typing import List


class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left = 0
        right = len(nums)
        mid = 0

        while left < right:
            mid = (left + right) // 2

            # check leftmost boundary value
            if mid - 1 < 0 and mid + 1 < len(nums):
                if mid - 1 < 0 and nums[mid] > nums[mid + 1]:
                    return mid

            # check rightmost boundary value
            if mid - 1 >= 0 and mid + 1 > len(nums):
                if nums[mid] > nums[mid - 1]:
                    return mid

            # check a value between two values
            if mid - 1 >= 0 and mid + 1 < len(nums):
                if nums[mid] > nums[mid - 1] and nums[mid] > nums[mid + 1]:
                    return mid

            if mid - 1 >= 0 and nums[mid-1] > nums[mid]:
                right = mid
            else:
                left = mid + 1

        return mid


print(Solution().findPeakElement([2, 1]))
