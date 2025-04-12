# 56. Merge Intervals

from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals = sorted(intervals, key=lambda x: x[0])

        res = []
        firstInterval = intervals[0][0]
        secondInterval = intervals[0][1]

        for i in range(1, len(intervals)):
            curr = intervals[i]

            if (curr[0] <= secondInterval):
                secondInterval = max(secondInterval, curr[1])
            else:
                res.append([firstInterval, secondInterval])
                firstInterval = curr[0]
                secondInterval = curr[1]

        res.append([firstInterval, secondInterval])

        return res


print(Solution().merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
