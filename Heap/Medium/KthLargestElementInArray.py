# 215. Kth Largest Element in an Array

import heapq
from typing import List


# heap solution
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)
        return heapq.nlargest(nums, k)[k]

# quick select


class Solution:
    def findKthLargestQuickSelect(self, nums: List[int], k: int) -> int:
        # we're converting from k-th largest to k-th smallest (0-based), since QuickSelect is better suited for selecting by index in ascending order.
        # the kth element that we are interested in basically eliminates this many elements
        # so by the time our partition index reaches k, we have gone through the elements that we are not interested in
        # we pass in the k = 2 but that also means the 5th largest elemnent when len of nums = 7
        k = len(nums) - k

        def quickSelect(l, r):
            # we can choose any index between l and r, we use rightmost value as our pivot
            pivot, partition_index = nums[r], l
            # partitioning
            for i in range(l, r):
                # if current elem (through the bit we are partitioning) is less than pivot, we move it to left of the partition index
                if nums[i] <= pivot:
                    # swap around the elem at the partition index with the current elem (without using a temp variable)
                    nums[partition_index], nums[i] = nums[i], nums[partition_index]
                    partition_index += 1  # increment position of partition index
            # once current partition is complete, we move the pivot to the partition index point
            nums[partition_index], nums[r] = nums[r], nums[partition_index]
            # it basically is the goal post which means that all elems left of this elem are less than the pivot

            # if partition index is larger than the kth element that we are interested, then our answer lies left of the partition index
            if partition_index > k:
                # left portion of the array
                return quickSelect(l, partition_index - 1)
            # if partition index is less than the kth element that we are interested, then our answer lies right of the partition index
            if k > partition_index:
                return quickSelect(partition_index + 1, r)
            # if the partition index is k then we have found our kth largest element
            else:
                return nums[partition_index]  # kth participle

        # start algorithm using entire array
        return quickSelect(0, len(nums) - 1)


# print(Solution().findKthLargestQuickSelect([3, 2, 0, 5, 6, 1, 4], 2))  # 5
print(Solution().findKthLargestQuickSelect([3, 2, 0, 5, 6, 1, 4], 5))  # 2
