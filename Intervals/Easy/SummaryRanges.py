# 228. Summary Ranges

from typing import List


class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        res = []
        if len(nums) == 0:
            return res

        start, end, prev = nums[0], nums[0], nums[0]

        for i in range(1, len(nums)):
            if nums[i] == prev + 1:
                end = prev + 1
            else:
                res.append(self.createRange(start, end))
                start, end = nums[i], nums[i]

            prev = nums[i]

        res.append(self.createRange(start, end))
        return res

    def createRange(self, start: int, end: int) -> str:
        if start == end:
            return str(start)
        return f"{start}->{end}"


print(Solution().summaryRanges([0, 1, 2, 4, 5, 7]))
