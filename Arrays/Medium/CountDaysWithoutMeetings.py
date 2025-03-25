# 3169. Count Days Without Meetings

from typing import List


class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        meetings = sorted(meetings)

        ans = 0

        curr = 1
        for start, end in meetings:
            if start > curr:
                ans += start - curr
            curr = max(curr, end + 1)

        ans += days - curr + 1
        return ans


print(Solution().countDays(10, [[5, 7], [1, 3], [9, 10]]))
