# 3264. Final Array State After K Multiplication Operations I

from typing import List


class Solution:
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:

        for _ in range(k):
            x = min(nums)
            index = nums.index(x)
            # print(f'{x = }, {index = }')
            nums[index] = nums[index]*multiplier
            # nums = [x*multiplier] + nums[:index] + nums[index+1:]
        return nums
