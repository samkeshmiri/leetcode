# 2206. Divide Array Into Equal Pairs

from collections import Counter
from typing import List


class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        c = Counter(nums)
        for val in c.values():
            if val % 2 == 1:
                return False
        return True


print(Solution().divideArray([1, 2, 3, 4, 5, 6]))  # False
